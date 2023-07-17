/*
  Warnings:

  - You are about to drop the column `businessTypeId` on the `ProductSubLine` table. All the data in the column will be lost.
  - You are about to drop the column `productCategoryId` on the `ProductSubLine` table. All the data in the column will be lost.
  - Made the column `productCategoryName` on table `ProductSubLine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessTypeName` on table `ProductSubLine` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_businessTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_productCategoryId_fkey`;

-- DropIndex
DROP INDEX `ProductSubLine_businessTypeName_fkey` ON `ProductSubLine`;

-- DropIndex
DROP INDEX `ProductSubLine_productCategoryName_fkey` ON `ProductSubLine`;

-- AlterTable
ALTER TABLE `ProductSubLine` DROP COLUMN `businessTypeId`,
    DROP COLUMN `productCategoryId`,
    MODIFY `productCategoryName` VARCHAR(191) NOT NULL,
    MODIFY `businessTypeName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_productCategoryName_fkey` FOREIGN KEY (`productCategoryName`) REFERENCES `ProductCategory`(`productCategoryName`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_businessTypeName_fkey` FOREIGN KEY (`businessTypeName`) REFERENCES `BusinessType`(`businessTypeName`) ON DELETE RESTRICT ON UPDATE CASCADE;
