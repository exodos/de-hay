import * as z from "zod"
import { STATUS } from "@prisma/client"
import { CompleteUser, relatedUserModel, CompleteAbility, relatedAbilityModel } from "./index"

export const roleModel = z.object({
  id: z.string(),
  name: z.string(),
  status: z.nativeEnum(STATUS),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteRole extends z.infer<typeof roleModel> {
  users: CompleteUser[]
  abilities: CompleteAbility[]
}

/**
 * relatedRoleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedRoleModel: z.ZodSchema<CompleteRole> = z.lazy(() => roleModel.extend({
  users: relatedUserModel.array(),
  abilities: relatedAbilityModel.array(),
}))
