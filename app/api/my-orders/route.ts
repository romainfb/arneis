import { NextResponse } from "next/server";
import { disconnectPrisma, getSession } from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch orders for the authenticated user.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the user's orders data or an error message.
 */
export async function GET(request: Request) {
  try {
    // Retrieve the authenticated user's session
    const session = await getSession();
    const userId = session?.user?.id ? parseInt(session.user.id) : null;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch orders for the authenticated user
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

    await disconnectPrisma();

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("GET /my-orders error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
