import * as z from "zod"
import { CompleteProductCategory, relatedProductCategoryModel, CompleteProductSubLine, relatedProductSubLineModel, CompleteProductLine, relatedProductLineModel } from "./index"

export const businessTypeModel = z.object({
  id: z.number().int(),
  businessTypeName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteBusinessType extends z.infer<typeof businessTypeModel> {
  productCategory: CompleteProductCategory[]
  ProductSubLine: CompleteProductSubLine[]
  ProductLine: CompleteProductLine[]
}

/**
 * relatedBusinessTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBusinessTypeModel: z.ZodSchema<CompleteBusinessType> = z.lazy(() => businessTypeModel.extend({
  productCategory: relatedProductCategoryModel.array(),
  ProductSubLine: relatedProductSubLineModel.array(),
  ProductLine: relatedProductLineModel.array(),
}))
