/*
  Warnings:

  - You are about to drop the column `product_category_id` on the `product_sub_line` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_sub_line" DROP CONSTRAINT "product_sub_line_business_type_id_fkey";

-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "product_category_id";

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_business_type_name_fkey" FOREIGN KEY ("business_type_name") REFERENCES "business_type"("business_type_name") ON DELETE SET NULL ON UPDATE CASCADE;
