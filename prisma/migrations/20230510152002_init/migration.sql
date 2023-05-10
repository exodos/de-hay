/*
  Warnings:

  - You are about to drop the column `productCommunication` on the `product_sub_line` table. All the data in the column will be lost.
  - You are about to drop the column `productDisplay` on the `product_sub_line` table. All the data in the column will be lost.
  - You are about to drop the column `productPowerSupply` on the `product_sub_line` table. All the data in the column will be lost.
  - You are about to drop the column `productRFID` on the `product_sub_line` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_sub_line" DROP COLUMN "productCommunication",
DROP COLUMN "productDisplay",
DROP COLUMN "productPowerSupply",
DROP COLUMN "productRFID";
