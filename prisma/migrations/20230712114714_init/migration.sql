/*
  Warnings:

  - You are about to drop the column `middleName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `middleName`,
    ADD COLUMN `resetPassword` BOOLEAN NOT NULL DEFAULT false;
