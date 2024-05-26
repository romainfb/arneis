import { PrismaClient } from "../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('category');
    const limit = searchParams.get('limit');

    let products;
    if (categoryId) {
      products = await prisma.product.findMany({
        where: {
          categoryId: parseInt(categoryId),
        },
        take: limit ? parseInt(limit) : undefined,
      });
    } else {
      products = await prisma.product.findMany({
        take: limit ? parseInt(limit) : undefined,
      });
    }

    await prisma.$disconnect();
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: "Internal Server Error" }, 500);
  }
}
