import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getClientByEmail } from "../app/api/auth/auth.service";
import { comparePassword } from "../lib/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // @ts-ignore
      authorize: async (credentials) => {
        const user = await getClientByEmail(credentials.email as string);
        if (
          !user ||
          !comparePassword(credentials.password as string, user.password)
        ) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Ajouter le rôle de l'utilisateur au jeton
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.role = token.role; // Ajouter le rôle de l'utilisateur à la session
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
});
