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

    await prisma.$disconnect();

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

export async function PATCH(request) {
  try {
    const session = await auth();
    const userId = parseInt(session?.user?.id);

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const { cardType, cardHolderName, cardNumber, expirationDate } =
      await request.json();

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

    await prisma.$disconnect();

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const session = await auth();
    const userId = parseInt(session?.user?.id);

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
          delete: true,
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

    await prisma.$disconnect();

    return NextResponse.json({ user: deletedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await auth();
    const userId = parseInt(session?.user?.id);

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const { cardType, cardHolderName, cardNumber, expirationDate } =
      await request.json();

    if (!cardType || !cardHolderName || !cardNumber || !expirationDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

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

    await prisma.$disconnect();

    return NextResponse.json({ paymentMethod: newPaymentMethod });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
