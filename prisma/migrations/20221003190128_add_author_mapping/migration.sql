-- CreateTable
CREATE TABLE "Author" (
    "reatchUserId" TEXT NOT NULL,
    "wepublishAuthorId" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("reatchUserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_wepublishAuthorId_key" ON "Author"("wepublishAuthorId");
