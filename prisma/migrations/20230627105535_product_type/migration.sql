/*
  Warnings:

  - You are about to drop the column `filter_header` on the `product_line` table. All the data in the column will be lost.
  - You are about to drop the column `filter_value` on the `product_sub_line` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_line" DROP COLUMN "filter_header";

-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "filter_value";
