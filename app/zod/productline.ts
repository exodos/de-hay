import * as z from "zod"
import { CompleteProductCategory, relatedProductCategoryModel, CompleteBusinessType, relatedBusinessTypeModel, CompleteProductSubLine, relatedProductSubLineModel } from "./index"

export const productLineModel = z.object({
  id: z.number().int(),
  productLineName: z.string().nullish(),
  productCategoryName: z.string().nullish(),
  businessTypeName: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProductLine extends z.infer<typeof productLineModel> {
  productCategory?: CompleteProductCategory | null
  businessType?: CompleteBusinessType | null
  productSubLine: CompleteProductSubLine[]
}

/**
 * relatedProductLineModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductLineModel: z.ZodSchema<CompleteProductLine> = z.lazy(() => productLineModel.extend({
  productCategory: relatedProductCategoryModel.nullish(),
  businessType: relatedBusinessTypeModel.nullish(),
  productSubLine: relatedProductSubLineModel.array(),
}))
