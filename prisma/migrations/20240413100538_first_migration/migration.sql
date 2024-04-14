-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "image_href_key" ON "image"("href");
