/*
  Warnings:

  - Made the column `filter_value` on table `product_sub_line` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product_sub_line" ALTER COLUMN "filter_value" SET NOT NULL;
