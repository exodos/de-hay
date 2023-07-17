/*
  Warnings:

  - Made the column `productCategoryName` on table `ProductCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `productCategoryName` on table `ProductSubLine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessTypeName` on table `ProductSubLine` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_businessTypeName_fkey`;

-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_productCategoryName_fkey`;

-- AlterTable
ALTER TABLE `ProductCategory` MODIFY `productCategoryName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ProductSubLine` MODIFY `productCategoryName` VARCHAR(191) NOT NULL,
    MODIFY `businessTypeName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_productCategoryName_fkey` FOREIGN KEY (`productCategoryName`) REFERENCES `ProductCategory`(`productCategoryName`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_businessTypeName_fkey` FOREIGN KEY (`businessTypeName`) REFERENCES `BusinessType`(`businessTypeName`) ON DELETE RESTRICT ON UPDATE CASCADE;
