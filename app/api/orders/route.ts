import { NextResponse } from "next/server";
import { checkAuthorization, disconnectPrisma } from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch all orders.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the orders data or an error message.
 */
export async function GET(request: Request) {
  try {
    // Check if the user is authorized
    const unauthorizedResponse = await checkAuthorization("admin");
    if (unauthorizedResponse) return unauthorizedResponse;

    // Get all orders
    const orders = await prisma.order.findMany({});

    await disconnectPrisma();

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("GET /orders error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
