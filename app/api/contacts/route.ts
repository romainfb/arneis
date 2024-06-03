import { NextResponse } from "next/server";
import {
  checkAuthorization,
  disconnectPrisma,
  parseIntParam,
} from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles POST requests to create a new contact.
 *
 * @param {Request} request - The incoming POST request.
 * @returns {Promise<NextResponse>} - The response containing the created contact data or an error message.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the request body
    const { email, sujet, message } = body;

    const contact = await prisma.contact.create({
      data: {
        email,
        sujet,
        message,
      },
    });

    await disconnectPrisma();

    return NextResponse.json({ contact });
  } catch (error) {
    console.error("POST /contact error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles GET requests to fetch all contacts.
 *
 * @returns {Promise<NextResponse>} - The response containing the contacts data or an error message.
 */
export async function GET() {
  try {
    const unauthorizedResponse = await checkAuthorization("admin");
    if (unauthorizedResponse) return unauthorizedResponse;

    const contacts = await prisma.contact.findMany();

    await disconnectPrisma();

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("GET /contact error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles DELETE requests to delete a contact by ID.
 *
 * @param {Request} request - The incoming DELETE request.
 * @returns {Promise<NextResponse>} - The response containing the deleted contact data or an error message.
 */
export async function DELETE(request: Request) {
  try {
    const unauthorizedResponse = await checkAuthorization("admin");
    if (unauthorizedResponse) return unauthorizedResponse;

    const { searchParams } = new URL(request.url);
    const id = parseIntParam(searchParams, "id");

    if (id === null) {
      return NextResponse.json(
        { error: "Contact ID is required" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.delete({
      where: {
        id,
      },
    });

    await disconnectPrisma();

    return NextResponse.json({ contact });
  } catch (error) {
    console.error("DELETE /contact error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
