-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "password" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,
    "admin_reset_password" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_type" (
    "id" SERIAL NOT NULL,
    "business_type_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "id" SERIAL NOT NULL,
    "product_category_name" TEXT,
    "business_type_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_line" (
    "id" SERIAL NOT NULL,
    "product_line_name" TEXT,
    "filter_header" TEXT[],
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
    "filter_value" JSONB,
    "product_category_id" INTEGER,
    "product_line_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_sub_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "STATUS" DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" TEXT NOT NULL,
    "action" TEXT[],
    "subject" TEXT[],
    "inverted" BOOLEAN NOT NULL DEFAULT false,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_mobile_number_key" ON "user"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "business_type_business_type_name_key" ON "business_type"("business_type_name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "product_category_business_type_id_fkey" FOREIGN KEY ("business_type_id") REFERENCES "business_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_line" ADD CONSTRAINT "product_line_product_category_id_fkey" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_category_id_fkey" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_sub_line" ADD CONSTRAINT "product_sub_line_product_line_id_fkey" FOREIGN KEY ("product_line_id") REFERENCES "product_line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
