import CredentialProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { cookies } from "next/headers";
import axios from "axios";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "text " },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          throw new Error("Missing username or password");
        }

        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          return null;
        }
        const isValid = await verifyPassword(
          credentials?.password,
          user.password
        );
        if (isValid) {
          console.log("Hash Not Matched To Logging In");
          return null;
        }

        cookies().set("jwtToken", user.token);
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token, user }) => {
      return { ...session, user: token };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
