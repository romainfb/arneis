import { PrismaClient } from "../../../prisma/generated/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const categoryId = req.query.category || null;
    const limit = req.query.limit;

    let products;
    if (categoryId) {
      products = await prisma.product.findMany({
        where: {
          categoryId: parseInt(categoryId),
        },
        take: limit ? parseInt(limit) : undefined, // Add limit parameter
      });
    } else {
      products = await prisma.product.findMany({
        take: limit ? parseInt(limit) : undefined, // Add limit parameter
      });
    }

    await prisma.$disconnect(); // Close Prisma instance after fetch
    return res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
