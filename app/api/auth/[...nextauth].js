import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./lib/prisma";

const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req) {
        const clientCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/login`,
          {
            method: "POST",
            body: JSON.stringify(clientCredentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const client = await res.json();

        if (res.ok && client) {
          return client;
        } else {
          return null;
        }
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
    encryption: true,
  },

  pages: {
    signIn: "/profil",
    signOut: "/profil",
    error: "/profil",
  },

  callbacks: {
    async session(session, client, token) {
      if (client !== null) {
        session.client = client;
      }
      return await session;
    },

    async jwt({ token, client }) {
      return await token;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
