import { NextResponse } from "next/server";
import { disconnectPrisma, parseIntParam } from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch materials for a specific product.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the materials data or an error message.
 */
export async function GET(request: Request) {
  try {
    // Extract product ID from query parameters
    const { searchParams } = new URL(request.url);
    const productId = parseIntParam(searchParams, "productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Fetch materials associated with the product
    const productMaterials = await prisma.productMaterials.findMany({
      where: { productId: productId },
      include: {
        Material: true,
      },
    });

    const materials = productMaterials.map((pm) => pm.Material);

    await disconnectPrisma();
    return NextResponse.json({ materials });
  } catch (error) {
    console.error("GET /materials-products error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
