import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/generated/client";
import { auth } from "../../auth";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch account details of the authenticated user.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the user data or an error message.
 */
export async function GET(request) {
  try {
    const session = await auth(); // Authenticate the user and get session
    const userId = parseInt(session?.user?.id); // Parse user ID from session

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await prisma.client.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        address: true,
        city: true,
        firstName: true,
        lastName: true,
      },
    });

    await prisma.$disconnect(); // Disconnect Prisma client

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles PATCH requests to update account details of the authenticated user.
 *
 * @param {Request} request - The incoming PATCH request.
 * @returns {Promise<NextResponse>} - The response containing the updated user data or an error message.
 */
export async function PATCH(request) {
  try {
    const session = await auth(); // Authenticate the user and get session
    const userId = parseInt(session?.user?.id); // Parse user ID from session

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const { email, address, city, firstName, lastName } = await request.json(); // Parse request body

    if (!email || !address || !city || !firstName || !lastName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        email,
        address,
        city,
        firstName,
        lastName,
      },
      select: {
        email: true,
        address: true,
        city: true,
        firstName: true,
        lastName: true,
      },
    });

    await prisma.$disconnect(); // Disconnect Prisma client

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
