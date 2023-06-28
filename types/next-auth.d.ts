import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { Role } from "@prisma/client";

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
      middleName: string;
      lastName: string;
      email: string;
      password: string;
      mobileNumber: string;
      adminResetPassword: string;
      roles: Role & {
        abilities: Ability;
      };
    } & DefaultSession["user"];
  }

  interface User {
    roles: Role;
  }
}
