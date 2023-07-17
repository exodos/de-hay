import * as z from "zod"
import { CompleteBusinessType, relatedBusinessTypeModel, CompleteProductSubLine, relatedProductSubLineModel } from "./index"

export const productCategoryModel = z.object({
  id: z.number().int(),
  productCategoryName: z.string(),
  businessTypeName: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProductCategory extends z.infer<typeof productCategoryModel> {
  businessType?: CompleteBusinessType | null
  productSubLine: CompleteProductSubLine[]
}

/**
 * relatedProductCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductCategoryModel: z.ZodSchema<CompleteProductCategory> = z.lazy(() => productCategoryModel.extend({
  businessType: relatedBusinessTypeModel.nullish(),
  productSubLine: relatedProductSubLineModel.array(),
}))
