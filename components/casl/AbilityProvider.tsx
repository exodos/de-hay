import { ReactNode } from "react";
import { createMongoAbility } from "@casl/ability";
import { AbilityContext } from "./Can";

type CaslProviderProps = {
  children: ReactNode;
  abilities: any[];
};

export default function AbilityProvider({
  children,
  abilities,
}: CaslProviderProps) {
  const ability = createMongoAbility(abilities ?? []);
  return (
    <AbilityContext.Provider value={ability ?? []}>
      {children}
    </AbilityContext.Provider>
  );
}
