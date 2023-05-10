-- AlterTable
ALTER TABLE "business_type" ADD COLUMN     "business_type_name" TEXT;

-- CreateTable
CREATE TABLE "productCategory" (
    "id" SERIAL NOT NULL,
    "product_category_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productCategory_pkey" PRIMARY KEY ("id")
);
