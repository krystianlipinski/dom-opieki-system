-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_productId_fkey";

-- DropForeignKey
ALTER TABLE "PatientFamilyAccess" DROP CONSTRAINT "PatientFamilyAccess_patientId_fkey";

-- DropForeignKey
ALTER TABLE "PatientFamilyAccess" DROP CONSTRAINT "PatientFamilyAccess_userId_fkey";

-- AddForeignKey
ALTER TABLE "PatientFamilyAccess" ADD CONSTRAINT "PatientFamilyAccess_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientFamilyAccess" ADD CONSTRAINT "PatientFamilyAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "CatalogProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
