import { Role } from "@prisma/client";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    roles: Role;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      mobileNumber: string;
      adminResetPassword: string;
      
    } & DefaultSession["user"];
  }

  interface User {
    roles: Role;
  }
}
