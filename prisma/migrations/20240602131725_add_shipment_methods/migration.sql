-- CreateTable
CREATE TABLE "CheckoutMethod" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cardType" TEXT NOT NULL,
    "cardHolderName" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CheckoutMethod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckoutMethod_id_key" ON "CheckoutMethod"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CheckoutMethod_userId_cardNumber_key" ON "CheckoutMethod"("userId", "cardNumber");

-- AddForeignKey
ALTER TABLE "CheckoutMethod" ADD CONSTRAINT "CheckoutMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
