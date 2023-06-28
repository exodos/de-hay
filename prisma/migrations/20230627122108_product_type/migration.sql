-- AlterTable
ALTER TABLE "product_line" ADD COLUMN     "businessTypeName" TEXT;

-- AddForeignKey
ALTER TABLE "product_line" ADD CONSTRAINT "product_line_businessTypeName_fkey" FOREIGN KEY ("businessTypeName") REFERENCES "business_type"("business_type_name") ON DELETE SET NULL ON UPDATE CASCADE;
