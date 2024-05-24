import { PrismaClient } from "../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const categoryId = url.searchParams.get("category") || null;
    const limit = url.searchParams.get("limit");

    let products;
    if (categoryId) {
      products = await prisma.product.findMany({
        where: {
          categoryId: parseInt(categoryId),
        },
        take: limit ? parseInt(limit) : undefined, // Add limit parameter
      });
    } else {
      products = await prisma.product.findMany({
        take: limit ? parseInt(limit) : undefined, // Add limit parameter
      });
    }

    prisma.$disconnect(); // Close Prisma instance after fetch
    return NextResponse.json({ products: products });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
