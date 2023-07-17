import * as z from "zod"
import { CompleteProductCategory, relatedProductCategoryModel, CompleteBusinessType, relatedBusinessTypeModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const productSubLineModel = z.object({
  id: z.number().int(),
  productName: z.string(),
  productDescription: z.string(),
  imageUrl: z.string().nullish(),
  productImages: jsonSchema,
  productCategoryName: z.string(),
  businessTypeName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProductSubLine extends z.infer<typeof productSubLineModel> {
  productCategory: CompleteProductCategory
  businessType: CompleteBusinessType
}

/**
 * relatedProductSubLineModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductSubLineModel: z.ZodSchema<CompleteProductSubLine> = z.lazy(() => productSubLineModel.extend({
  productCategory: relatedProductCategoryModel,
  businessType: relatedBusinessTypeModel,
}))
