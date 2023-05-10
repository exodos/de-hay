/*
  Warnings:

  - You are about to drop the column `filterHeader` on the `product_line` table. All the data in the column will be lost.
  - You are about to drop the column `filterValue` on the `product_line` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_line" DROP COLUMN "filterHeader",
DROP COLUMN "filterValue",
ADD COLUMN     "filter_header" TEXT[];

-- AlterTable
ALTER TABLE "product_sub_line" ADD COLUMN     "filter_value" TEXT[];
