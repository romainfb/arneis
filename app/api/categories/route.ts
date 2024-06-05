import { NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

/**
 * Handles GET requests to fetch categories.
 *
 * If an 'id' query parameter is provided, it fetches a single category by ID.
 * Otherwise, it fetches a list of categories, optionally limited by a 'limit' query parameter.
 *
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the category data or an error message.
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url); // Extract query parameters from the URL
    const limit = searchParams.get("limit"); // Get 'limit' parameter
    const id = searchParams.get("id"); // Get 'id' parameter

    if (id) {
      // If 'id' parameter is present, fetch a single category by ID
      const category = await prisma.category.findUnique({
        where: { id: parseInt(id) },
      });

      if (!category) {
        return NextResponse.json(
          { error: "Category not found" },
          { status: 404 }
        ); // Return 404 if category not found
      }

      await prisma.$disconnect(); // Disconnect Prisma client
      return NextResponse.json({ category }); // Return the category data
    } else {
      // If 'id' parameter is not present, fetch multiple categories
      const categories = await prisma.category.findMany({
        take: limit ? parseInt(limit) : undefined, // Apply limit if provided
      });

      await prisma.$disconnect(); // Disconnect Prisma client
      return NextResponse.json({ categories }); // Return the categories data
    }
  } catch (error) {
    console.error(error); // Log the error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    ); // Return 500 on error
  }
}
