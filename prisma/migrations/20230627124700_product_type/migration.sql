/*
  Warnings:

  - You are about to drop the column `product_line_id` on the `product_sub_line` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_sub_line" DROP CONSTRAINT "product_sub_line_product_line_id_fkey";

-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "product_line_id";

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_line_name_fkey" FOREIGN KEY ("product_line_name") REFERENCES "product_line"("product_line_name") ON DELETE SET NULL ON UPDATE CASCADE;
