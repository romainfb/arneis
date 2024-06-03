import { auth } from "../app/auth";
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

export async function roleChecker(role: string) {
  const session = await auth();

  const userRole = session?.user?.role;
  const userId = session?.user?.id;

  if (userRole !== role) {
    return false;
  }

  // Vérifier dans la base de données si l'utilisateur a le rôle demandé
  const user = await prisma.client.findUnique({
    where: {
      id: Number(userId),
    },
    select: {
      role: true,
    },
  });

  if (!user || user.role !== role) {
    return false;
  }

  return true;
}
