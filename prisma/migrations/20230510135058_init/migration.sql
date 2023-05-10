/*
  Warnings:

  - You are about to drop the `BusinessType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BusinessType";

-- CreateTable
CREATE TABLE "business_type" (
    "id" SERIAL NOT NULL,
    "business_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "business_type_business_name_key" ON "business_type"("business_name");
