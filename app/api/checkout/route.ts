import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/generated/client";
import { auth } from "../../auth";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch the checkout details of the authenticated user.
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
        checkoutMethods: {
          select: {
            cardType: true,
            cardHolderName: true,
            cardNumber: true,
            expirationDate: true,
          },
        },
      },
    });

    await prisma.$disconnect(); // Disconnect Prisma client

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles PATCH requests to update the checkout details of the authenticated user.
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

    const { cardType, cardHolderName, cardNumber, expirationDate } =
      await request.json(); // Parse request body

    if (!cardType || !cardHolderName || !cardNumber || !expirationDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        checkoutMethods: {
          update: {
            where: {
              // @ts-ignore
              clientId: userId,
            },
            data: {
              cardType,
              cardHolderName,
              cardNumber,
              expirationDate,
            },
          },
        },
      },
      select: {
        email: true,
        address: true,
        city: true,
        firstName: true,
        lastName: true,
        checkoutMethods: {
          select: {
            cardType: true,
            cardHolderName: true,
            cardNumber: true,
            expirationDate: true,
          },
        },
      },
    });

    await prisma.$disconnect(); // Disconnect Prisma client

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles DELETE requests to delete the checkout details of the authenticated user.
 *
 * @param {Request} request - The incoming DELETE request.
 * @returns {Promise<NextResponse>} - The response containing the updated user data or an error message.
 */
export async function DELETE(request) {
  try {
    const session = await auth(); // Authenticate the user and get session
    const userId = parseInt(session?.user?.id); // Parse user ID from session

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const deletedUser = await prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        checkoutMethods: {
          // @ts-ignore
          delete: true, // Delete the checkout methods
        },
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

    return NextResponse.json({ user: deletedUser });
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles POST requests to add new checkout details for the authenticated user.
 *
 * @param {Request} request - The incoming POST request.
 * @returns {Promise<NextResponse>} - The response containing the new payment method data or an error message.
 */
export async function POST(request) {
  try {
    const session = await auth(); // Authenticate the user and get session
    const userId = parseInt(session?.user?.id); // Parse user ID from session

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const { cardType, cardHolderName, cardNumber, expirationDate } =
      await request.json(); // Parse request body

    if (!cardType || !cardHolderName || !cardNumber || !expirationDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already has a payment method
    const user = await prisma.client.findUnique({
      where: {
        id: userId,
      },
      select: {
        checkoutMethods: {
          select: {
            cardType: true,
            cardHolderName: true,
            cardNumber: true,
            expirationDate: true,
          },
        },
      },
    });

    if (user?.checkoutMethods) {
      return NextResponse.json(
        { error: "User already has a payment method" },
        { status: 400 }
      );
    }

    const newPaymentMethod = await prisma.checkoutMethod.create({
      data: {
        cardType,
        cardHolderName,
        cardNumber,
        expirationDate,
        client: {
          connect: {
            id: userId,
          },
        },
      },
    });

    await prisma.$disconnect(); // Disconnect Prisma client

    return NextResponse.json({ paymentMethod: newPaymentMethod });
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
