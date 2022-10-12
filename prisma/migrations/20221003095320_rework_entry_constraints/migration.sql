/*
  Warnings:

  - The primary key for the `Entry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[wepublishArticleId]` on the table `Entry` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_pkey",
ADD CONSTRAINT "Entry_pkey" PRIMARY KEY ("reatchEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "Entry_wepublishArticleId_key" ON "Entry"("wepublishArticleId");
