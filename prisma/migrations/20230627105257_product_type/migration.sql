/*
  Warnings:

  - You are about to drop the column `product_category_id` on the `product_sub_line` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_sub_line" DROP CONSTRAINT "product_sub_line_product_category_id_fkey";

-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "product_category_id";
