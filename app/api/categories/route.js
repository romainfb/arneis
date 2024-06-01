import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/generated/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const id = searchParams.get("id");

    if (id) {
      const category = await prisma.category.findUnique({
        where: { id: parseInt(id) },
      });

      if (!category) {
        return NextResponse.error({ message: "Category not found" }, 404);
      }

      await prisma.$disconnect();
      return NextResponse.json({ category });
    } else {
      const categories = await prisma.category.findMany({
        take: limit ? parseInt(limit) : undefined,
      });

      await prisma.$disconnect();
      return NextResponse.json({ categories });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: "Internal Server Error" }, 500);
  }
}
