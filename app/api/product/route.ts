import { NextResponse } from "next/server";
import { checkAuthorization, disconnectPrisma } from "../../../lib/api-utils";
import { PrismaClient } from "../../../prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Extracts the product ID from the request URL.
 *
 * @param {Request} request - The incoming request object.
 * @returns {number | null} - The extracted product ID, or null if not found.
 */
function getProductId(request: Request): number | null {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  return id ? parseInt(id) : null;
}

/**
 * Handles GET requests to fetch a product by ID.
 *
 * @param {NextRequest} request - The incoming GET request.
 * @returns {Promise<NextResponse>} - The response containing the product data or an error message.
 */
export async function GET(request: Request) {
  try {
    const productId = getProductId(request);
    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await disconnectPrisma();

    return NextResponse.json({ product });
  } catch (error) {
    console.error("GET /product error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles PUT requests to update a product by ID.
 *
 * @param {Request} request - The incoming PUT request.
 * @returns {Promise<NextResponse>} - The response containing the updated product data or an error message.
 */
export async function PUT(request: Request) {
  try {
    const unauthorizedResponse = await checkAuthorization("admin");
    if (unauthorizedResponse) return unauthorizedResponse;

    const productId = getProductId(request);
    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const { name, description, price, stock, categoryId, thumbnail } =
      await request.json();

    if (!name || !description || !price || !stock || !categoryId) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        categoryId: parseInt(categoryId),
        thumbnail,
      },
    });

    await disconnectPrisma();

    return NextResponse.json({ product });
  } catch (error) {
    console.error("PUT /product error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles POST requests to create a new product.
 *
 * @param {Request} request - The incoming POST request.
 * @returns {Promise<NextResponse>} - The response containing the created product data or an error message.
 */
export async function POST(request: Request) {
  try {
    const unauthorizedResponse = await checkAuthorization("admin");
    if (unauthorizedResponse) return unauthorizedResponse;

    const { name, description, price, stock, categoryId, thumbnail } =
      await request.json();

    if (!name || !description || !price || !stock || !categoryId) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        categoryId: parseInt(categoryId),
        thumbnail,
      },
    });

    await disconnectPrisma();

    return NextResponse.json({ product });
  } catch (error) {
    console.error("POST /product error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Handles DELETE requests to remove a product by ID.
 *
 * @param {Request} request - The incoming DELETE request.
 * @returns {Promise<NextResponse>} - The response containing the deleted product data or an error message.
 */
export async function DELETE(request: Request) {
  try {
    const unauthorizedResponse = await checkAuthorization("admin");
    if (unauthorizedResponse) return unauthorizedResponse;

    const productId = getProductId(request);
    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.delete({
      where: { id: productId },
    });

    await disconnectPrisma();

    return NextResponse.json({ product });
  } catch (error) {
    console.error("DELETE /product error:", error);
    await disconnectPrisma();
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
