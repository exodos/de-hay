"use client";

import { useContext } from "react";
import { AbilityContext } from "./Can";

export const useUserAbility = () => {
  const abilities = useContext(AbilityContext);
  return abilities;
};
