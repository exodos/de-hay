import * as z from "zod"
import { Role } from "@prisma/client"

export const userModel = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  roles: z.nativeEnum(Role),
  mobileNumber: z.string(),
  adminResetPassword: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
