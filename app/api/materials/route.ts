import { NextResponse } from "next/server";
import { disconnectPrisma, parseIntParam } from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch materials, either a single material by ID or multiple materials with an optional limit.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the material(s) data or an error message.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseIntParam(searchParams, "limit");
    const id = parseIntParam(searchParams, "id");

    if (id !== null) {
      const material = await prisma.material.findUnique({
        where: { id },
      });

      if (!material) {
        await disconnectPrisma();
        return NextResponse.json(
          { error: "Material not found" },
          { status: 404 }
        );
      }

      await disconnectPrisma();
      return NextResponse.json({ material });
    } else {
      const materials = await prisma.material.findMany({
        take: limit !== null ? limit : undefined,
      });

      await disconnectPrisma();
      return NextResponse.json({ materials });
    }
  } catch (error) {
    console.error("GET /materials error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
