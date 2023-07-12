/*
  Warnings:

  - You are about to drop the `business_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_line` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_sub_line` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_category` DROP FOREIGN KEY `product_category_businessTypeName_fkey`;

-- DropForeignKey
ALTER TABLE `product_line` DROP FOREIGN KEY `product_line_businessTypeName_fkey`;

-- DropForeignKey
ALTER TABLE `product_line` DROP FOREIGN KEY `product_line_productCategoryName_fkey`;

-- DropForeignKey
ALTER TABLE `product_sub_line` DROP FOREIGN KEY `product_sub_line_business_type_name_fkey`;

-- DropForeignKey
ALTER TABLE `product_sub_line` DROP FOREIGN KEY `product_sub_line_product_category_name_fkey`;

-- DropForeignKey
ALTER TABLE `product_sub_line` DROP FOREIGN KEY `product_sub_line_product_line_name_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_roleId_fkey`;

-- DropTable
DROP TABLE `business_type`;

-- DropTable
DROP TABLE `product_category`;

-- DropTable
DROP TABLE `product_line`;

-- DropTable
DROP TABLE `product_sub_line`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `adminResetPassword` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_mobileNumber_key`(`mobileNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BusinessType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `businessTypeName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BusinessType_businessTypeName_key`(`businessTypeName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productCategoryName` VARCHAR(191) NULL,
    `businessTypeName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ProductCategory_productCategoryName_key`(`productCategoryName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductSubLine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `productDescription` VARCHAR(191) NULL,
    `imageUrl` VARCHAR(191) NULL,
    `productImages` JSON NOT NULL,
    `productCategoryName` VARCHAR(191) NULL,
    `businessTypeName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ProductSubLine_productName_key`(`productName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductCategory` ADD CONSTRAINT `ProductCategory_businessTypeName_fkey` FOREIGN KEY (`businessTypeName`) REFERENCES `BusinessType`(`businessTypeName`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_productCategoryName_fkey` FOREIGN KEY (`productCategoryName`) REFERENCES `ProductCategory`(`productCategoryName`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSubLine` ADD CONSTRAINT `ProductSubLine_businessTypeName_fkey` FOREIGN KEY (`businessTypeName`) REFERENCES `BusinessType`(`businessTypeName`) ON DELETE SET NULL ON UPDATE CASCADE;
