/*
  Warnings:

  - A unique constraint covering the columns `[product_category_name]` on the table `product_category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_line_name]` on the table `product_line` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "product_line" DROP CONSTRAINT "product_line_product_category_id_fkey";

-- AlterTable
ALTER TABLE "product_line" ADD COLUMN     "productCategoryName" TEXT;

-- AlterTable
ALTER TABLE "product_sub_line" ADD COLUMN     "productLineName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "product_category_product_category_name_key" ON "product_category"("product_category_name");

-- CreateIndex
CREATE UNIQUE INDEX "product_line_product_line_name_key" ON "product_line"("product_line_name");

-- AddForeignKey
ALTER TABLE "product_line" ADD CONSTRAINT "product_line_productCategoryName_fkey" FOREIGN KEY ("productCategoryName") REFERENCES "product_category"("product_category_name") ON DELETE SET NULL ON UPDATE CASCADE;
