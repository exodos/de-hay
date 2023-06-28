/*
  Warnings:

  - You are about to drop the column `productLineName` on the `product_sub_line` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_sub_line" DROP CONSTRAINT "product_sub_line_product_category_id_fkey";

-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "productLineName",
ADD COLUMN     "business_type_name" TEXT,
ADD COLUMN     "product_category_name" TEXT,
ADD COLUMN     "product_line_name" TEXT;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_category_name_fkey" FOREIGN KEY ("product_category_name") REFERENCES "product_category"("product_category_name") ON DELETE SET NULL ON UPDATE CASCADE;
