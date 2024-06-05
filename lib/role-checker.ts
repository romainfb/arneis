import { auth } from "../app/auth";
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

/**
 * Checks if the currently authenticated user has the specified role.
 * Returns false if the user does not have the required role, true otherwise.
 *
 * @param {string} role - The role to check against.
 * @returns {Promise<boolean>} - Returns false if the user does not have the required role, true otherwise.
 */
export async function roleChecker(role: string): Promise<boolean> {
  const session = await auth();

  // @ts-ignore
  const userRole = session?.user?.role;
  const userId = session?.user?.id;

  if (userRole !== role) {
    return false;
  }

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
