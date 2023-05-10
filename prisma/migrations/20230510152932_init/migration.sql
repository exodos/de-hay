/*
  Warnings:

  - The `filter_value` column on the `product_sub_line` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "filter_value",
ADD COLUMN     "filter_value" JSONB;
