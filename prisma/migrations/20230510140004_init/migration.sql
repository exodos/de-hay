/*
  Warnings:

  - You are about to drop the column `business_name` on the `business_type` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[business_type_name]` on the table `business_type` will be added. If there are existing duplicate values, this will fail.
  - Made the column `business_type_name` on table `business_type` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "business_type_business_name_key";

-- AlterTable
ALTER TABLE "business_type" DROP COLUMN "business_name",
ALTER COLUMN "business_type_name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "business_type_business_type_name_key" ON "business_type"("business_type_name");
