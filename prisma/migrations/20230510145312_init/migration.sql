/*
  Warnings:

  - You are about to drop the column `businessTypeId` on the `product_category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_category" DROP CONSTRAINT "product_category_businessTypeId_fkey";

-- AlterTable
ALTER TABLE "product_category" DROP COLUMN "businessTypeId",
ADD COLUMN     "business_type_id" INTEGER;

-- CreateTable
CREATE TABLE "product_line" (
    "id" SERIAL NOT NULL,
    "product_line_name" TEXT,
    "product_category_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_sub_line" (
    "id" SERIAL NOT NULL,
    "productName" TEXT,
    "productDescription" TEXT,
    "imageUrl" TEXT,
    "productImages" TEXT[],
    "productCommunication" TEXT[],
    "productDisplay" TEXT[],
    "productPowerSupply" TEXT[],
    "productRFID" TEXT[],
    "product_category_id" INTEGER,
    "product_line_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_sub_line_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_business_type_id_fkey" FOREIGN KEY ("business_type_id") REFERENCES "business_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_line" ADD CONSTRAINT "product_line_product_category_id_fkey" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_category_id_fkey" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_line_id_fkey" FOREIGN KEY ("product_line_id") REFERENCES "product_line"("id") ON DELETE SET NULL ON UPDATE CASCADE;
