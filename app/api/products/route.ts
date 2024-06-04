import { NextResponse } from "next/server";
import { disconnectPrisma, parseIntParam } from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch products with optional category filtering and limit.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the products data or an error message.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const categoryId = parseIntParam(searchParams, "category");
    const materialId = parseIntParam(searchParams, "material");
    const minPrice = parseIntParam(searchParams, "minPrice");
    const maxPrice = parseIntParam(searchParams, "maxPrice");
    const inStock = searchParams.get("inStock") === "true";
    const limit = parseIntParam(searchParams, "limit");

    let whereClause: any = {};

    if (query) {
      whereClause.OR = [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ];
    }
    if (categoryId !== null) {
      whereClause.categoryId = categoryId;
    }
    if (minPrice !== null) {
      whereClause.price = { ...whereClause.price, gte: minPrice };
    }
    if (maxPrice !== null) {
      whereClause.price = { ...whereClause.price, lte: maxPrice };
    }
    if (inStock) {
      whereClause.stock = { gt: 0 };
    }

    let products;

    if (materialId !== null) {
      products = await prisma.product.findMany({
        where: {
          ...whereClause,
          ProductMaterials: {
            some: {
              materialId: materialId,
            },
          },
        },
        take: limit !== null ? limit : undefined,
        include: {
          ProductMaterials: true, // Include ProductMaterials to ensure the join
        },
      });
    } else {
      products = await prisma.product.findMany({
        where: whereClause,
        take: limit !== null ? limit : undefined,
      });
    }

    await disconnectPrisma();
    return NextResponse.json({ products });
  } catch (error) {
    console.error("GET /products error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
