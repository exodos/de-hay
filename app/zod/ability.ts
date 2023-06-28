import * as z from "zod"
import { CompleteRole, relatedRoleModel } from "./index"

export const abilityModel = z.object({
  id: z.string(),
  action: z.string().array(),
  subject: z.string().array(),
  inverted: z.boolean(),
  roleId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteAbility extends z.infer<typeof abilityModel> {
  role: CompleteRole
}

/**
 * relatedAbilityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAbilityModel: z.ZodSchema<CompleteAbility> = z.lazy(() => abilityModel.extend({
  role: relatedRoleModel,
}))
