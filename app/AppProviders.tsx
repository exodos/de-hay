"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/configs/getQueryClient";
import { getAbility } from "@/components/casl/getAbility";
import AbilityProvider from "@/components/casl/AbilityProvider";

type AppProvidersProps = {
  session?: Session | null;
  children: React.ReactNode;
};
export default function AppProviders({ session, children }: AppProvidersProps) {
  const abilities = session?.user?.roles.abilities;
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <AbilityProvider abilities={abilities ?? []}>
          {children}
        </AbilityProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
