import * as z from "zod"
import { CompleteProductLine, relatedProductLineModel, CompleteProductCategory, relatedProductCategoryModel, CompleteBusinessType, relatedBusinessTypeModel } from "./index"

export const productSubLineModel = z.object({
  id: z.number().int(),
  productName: z.string().nullish(),
  productDescription: z.string().nullish(),
  imageUrl: z.string().nullish(),
  productImages: z.string().array(),
  productLineName: z.string().nullish(),
  productCategoryName: z.string().nullish(),
  businessTypeName: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProductSubLine extends z.infer<typeof productSubLineModel> {
  productLine?: CompleteProductLine | null
  productCategory?: CompleteProductCategory | null
  businessType?: CompleteBusinessType | null
}

/**
 * relatedProductSubLineModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductSubLineModel: z.ZodSchema<CompleteProductSubLine> = z.lazy(() => productSubLineModel.extend({
  productLine: relatedProductLineModel.nullish(),
  productCategory: relatedProductCategoryModel.nullish(),
  businessType: relatedBusinessTypeModel.nullish(),
}))
