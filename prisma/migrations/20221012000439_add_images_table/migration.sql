-- CreateTable
CREATE TABLE "Image" (
    "reatchAssetId" TEXT NOT NULL,
    "wepublishImageId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("reatchAssetId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_wepublishImageId_key" ON "Image"("wepublishImageId");
