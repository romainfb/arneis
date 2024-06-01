import { PrismaClient } from "../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function createClientInDb(client) {
  const { email, password } = client;
  try {
    const newClient = await prisma.client.create({
      data: {
        email,
        password,
      },
    });
    return newClient;
  } catch (error) {
    throw new Error("Error creating client: " + error.message);
  } finally {
    await prisma.$disconnect(); // Fermer la connexion après utilisation
  }
}

export async function checkEmailExistsInDb(email) {
  try {
    const client = await prisma.client.findUnique({
      where: {
        email: email,
      },
    });
    return client;
  } catch (error) {
    throw new Error("Error checking email: " + error.message);
  } finally {
    await prisma.$disconnect(); // Fermer la connexion après utilisation
  }
}
