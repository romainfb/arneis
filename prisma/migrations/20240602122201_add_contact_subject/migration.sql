/*
  Warnings:

  - You are about to drop the column `nom` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `portable` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "nom",
DROP COLUMN "portable",
ADD COLUMN     "sujet" TEXT;
