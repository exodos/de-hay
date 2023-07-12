/*
  Warnings:

  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Ability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Ability` DROP FOREIGN KEY `Ability_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_roleId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `roleId`,
    ADD COLUMN `roles` ENUM('SUPERADMIN', 'ADMIN', 'USER') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `Ability`;

-- DropTable
DROP TABLE `Role`;
