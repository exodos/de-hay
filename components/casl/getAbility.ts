import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { cache } from "react";
import "server-only";

export const preload = () => {
  void getAbility();
};

export const getAbility = cache(async () => {
  const session = await getServerSession(authOptions);
  const abilities = session?.user?.roles.abilities;
  return abilities;
});
