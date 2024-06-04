/*
  Warnings:

  - You are about to drop the column `materialId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_materialId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "materialId";

-- CreateTable
CREATE TABLE "ProductMaterials" (
    "productId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,

    CONSTRAINT "ProductMaterials_pkey" PRIMARY KEY ("productId","materialId")
);

-- CreateTable
CREATE TABLE "_ProductMaterials" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductMaterials_AB_unique" ON "_ProductMaterials"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductMaterials_B_index" ON "_ProductMaterials"("B");

-- AddForeignKey
ALTER TABLE "ProductMaterials" ADD CONSTRAINT "ProductMaterials_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMaterials" ADD CONSTRAINT "ProductMaterials_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductMaterials" ADD CONSTRAINT "_ProductMaterials_A_fkey" FOREIGN KEY ("A") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductMaterials" ADD CONSTRAINT "_ProductMaterials_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
