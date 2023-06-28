-- AlterTable
ALTER TABLE "product_line" ADD COLUMN     "filter_header" TEXT[];

-- AlterTable
ALTER TABLE "product_sub_line" ADD COLUMN     "business_type_id" INTEGER,
ADD COLUMN     "filter_value" JSONB,
ADD COLUMN     "product_category_id" INTEGER;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_category_id_fkey" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_business_type_id_fkey" FOREIGN KEY ("business_type_id") REFERENCES "business_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
