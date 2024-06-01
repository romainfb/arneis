import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/generated/client";
import { auth } from "../../auth";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const session = await auth();
    const userId = parseInt(session?.user?.id);

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const orders = await prisma.order.findMany({
      where: {
        clientId: userId,
      },
      select: {
        id: true,
        status: true,
        orderDate: true,
        ArticleOrder: {
          select: {
            id: true,
            productId: true,
            quantity: true,
            price: true,
          },
        },
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ orders });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
