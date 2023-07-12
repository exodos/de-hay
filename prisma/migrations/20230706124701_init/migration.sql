/*
  Warnings:

  - Made the column `productDescription` on table `ProductSubLine` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `ProductSubLine` MODIFY `productDescription` VARCHAR(255) NOT NULL,
    MODIFY `productImages` JSON NULL;
