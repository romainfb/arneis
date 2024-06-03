import { NextResponse } from "next/server";
import { auth } from "../app/auth";
import { PrismaClient } from "../prisma/generated/client";
import { roleChecker } from "./role-checker";

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Checks if the user has the required role.
 *
 * @param {string} role - The role to check against.
 * @returns {Promise<NextResponse | null>} - Returns an unauthorized response if the user does not have the required role, otherwise null.
 */
export async function checkAuthorization(role: string) {
  const isAuthorized = await roleChecker(role);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

/**
 * Disconnects the Prisma client.
 *
 * @returns {Promise<void>}
 */
export async function disconnectPrisma() {
  await prisma.$disconnect();
}

/**
 * Parses a query parameter as an integer.
 *
 * @param {URLSearchParams} searchParams - The URLSearchParams object.
 * @param {string} key - The key of the parameter to parse.
 * @returns {number | null} - The parsed integer or null if not found or invalid.
 */
export function parseIntParam(
  searchParams: URLSearchParams,
  key: string
): number | null {
  const value = searchParams.get(key);
  if (value === null) {
    return null;
  }
  const parsedValue = parseInt(value);
  return isNaN(parsedValue) ? null : parsedValue;
}

/**
 * Retrieves the authenticated user's session.
 *
 * @returns {Promise<{ user: { id: string } } | null>} - The authenticated user's session or null if not authenticated.
 */
export async function getSession() {
  return auth();
}
