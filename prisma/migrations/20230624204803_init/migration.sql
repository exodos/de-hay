-- DropForeignKey
ALTER TABLE "product_category" DROP CONSTRAINT "product_category_business_type_id_fkey";

-- AlterTable
ALTER TABLE "product_category" ADD COLUMN     "businessTypeName" TEXT;

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_businessTypeName_fkey" FOREIGN KEY ("businessTypeName") REFERENCES "business_type"("business_type_name") ON DELETE SET NULL ON UPDATE CASCADE;
