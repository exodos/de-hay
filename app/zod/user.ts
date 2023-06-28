import * as z from "zod"
import { CompleteRole, relatedRoleModel } from "./index"

export const userModel = z.object({
  id: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  roleId: z.string(),
  mobileNumber: z.string(),
  adminResetPassword: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof userModel> {
  roles: CompleteRole
}

/**
 * relatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => userModel.extend({
  roles: relatedRoleModel,
}))
