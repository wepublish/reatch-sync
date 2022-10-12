-- CreateTable
CREATE TABLE "Entry" (
    "wepublishArticleId" TEXT NOT NULL,
    "reatchEntryId" TEXT NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("wepublishArticleId","reatchEntryId")
);
