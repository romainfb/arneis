import { PrismaClient } from "../../../prisma/generated/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const productId = req.query.id;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
      },
    });

    await prisma.$disconnect(); // Close the Prisma instance after retrieval

    return res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
