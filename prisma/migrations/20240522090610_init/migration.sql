/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE admin_id_seq;
ALTER TABLE "Admin" ALTER COLUMN "id" SET DEFAULT nextval('admin_id_seq');
ALTER SEQUENCE admin_id_seq OWNED BY "Admin"."id";

-- AlterTable
CREATE SEQUENCE articleorder_id_seq;
ALTER TABLE "ArticleOrder" ALTER COLUMN "id" SET DEFAULT nextval('articleorder_id_seq');
ALTER SEQUENCE articleorder_id_seq OWNED BY "ArticleOrder"."id";

-- AlterTable
CREATE SEQUENCE category_id_seq;
ALTER TABLE "Category" ADD COLUMN     "thumbnail" TEXT,
ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE category_id_seq OWNED BY "Category"."id";

-- AlterTable
CREATE SEQUENCE client_id_seq;
ALTER TABLE "Client" ALTER COLUMN "id" SET DEFAULT nextval('client_id_seq');
ALTER SEQUENCE client_id_seq OWNED BY "Client"."id";

-- AlterTable
CREATE SEQUENCE material_id_seq;
ALTER TABLE "Material" ALTER COLUMN "id" SET DEFAULT nextval('material_id_seq');
ALTER SEQUENCE material_id_seq OWNED BY "Material"."id";

-- AlterTable
CREATE SEQUENCE order_id_seq;
ALTER TABLE "Order" ALTER COLUMN "id" SET DEFAULT nextval('order_id_seq');
ALTER SEQUENCE order_id_seq OWNED BY "Order"."id";

-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "Product" DROP COLUMN "image",
ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "Product"."id";

-- CreateTable
CREATE TABLE "ProductGallery" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductGallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductGallery" ADD CONSTRAINT "ProductGallery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
