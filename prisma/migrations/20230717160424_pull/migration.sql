-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_productCategoryName_fkey`;

-- AlterTable
ALTER TABLE `ProductSubLine` ADD COLUMN `productCategoryId` VARCHAR(191) NULL,
    MODIFY `productCategoryName` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_productCategoryName_fkey` FOREIGN KEY (`productCategoryName`) REFERENCES `ProductCategory`(`productCategoryName`) ON DELETE SET NULL ON UPDATE CASCADE;
