-- DropForeignKey
ALTER TABLE `ProductSubLine` DROP FOREIGN KEY `ProductSubLine_businessTypeName_fkey`;

-- AlterTable
ALTER TABLE `ProductSubLine` MODIFY `businessTypeName` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_businessTypeName_fkey` FOREIGN KEY (`businessTypeName`) REFERENCES `BusinessType`(`businessTypeName`) ON DELETE SET NULL ON UPDATE CASCADE;
