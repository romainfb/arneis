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

    const { email, address, city, firstName, lastName } = await request.json();

    if (!email || !address || !city || !firstName || !lastName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

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
