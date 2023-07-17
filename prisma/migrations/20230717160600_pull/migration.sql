/*
  Warnings:

  - You are about to alter the column `productCategoryId` on the `ProductSubLine` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_businessTypeName_fkey`;

-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_productCategoryName_fkey`;

-- AlterTable
ALTER TABLE `ProductSubLine` ADD COLUMN `businessTypeId` INTEGER NULL,
    MODIFY `productCategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_productCategoryId_fkey` FOREIGN KEY (`productCategoryId`) REFERENCES `ProductCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_businessTypeId_fkey` FOREIGN KEY (`businessTypeId`) REFERENCES `BusinessType`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
