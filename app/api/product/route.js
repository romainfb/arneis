import { PrismaClient } from "../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const productId = url.searchParams.get("id");

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
      },
    });

    prisma.$disconnect(); // Close the Prisma instance after retrieval

    return NextResponse.json({ product });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
