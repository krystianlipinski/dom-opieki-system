/*
  Warnings:

  - The values [staff_rehab] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `birthDate` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the `CatalogActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CatalogProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InventoryMovement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PatientFamilyAccess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('admin', 'staff_care', 'staff_doctor', 'family');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'staff_care';
COMMIT;

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_productId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_productId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_taskId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_userId_fkey";

-- DropForeignKey
ALTER TABLE "PatientFamilyAccess" DROP CONSTRAINT "PatientFamilyAccess_patientId_fkey";

-- DropForeignKey
ALTER TABLE "PatientFamilyAccess" DROP CONSTRAINT "PatientFamilyAccess_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_completedByUserId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_patientId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "birthDate",
ADD COLUMN     "completedByUserId" INTEGER;

-- DropTable
DROP TABLE "CatalogActivity";

-- DropTable
DROP TABLE "CatalogProduct";

-- DropTable
DROP TABLE "Inventory";

-- DropTable
DROP TABLE "InventoryMovement";

-- DropTable
DROP TABLE "PatientFamilyAccess";

-- DropTable
DROP TABLE "Task";

-- DropEnum
DROP TYPE "MovementType";

-- DropEnum
DROP TYPE "TaskStatus";

-- DropEnum
DROP TYPE "TaskType";

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_completedByUserId_fkey" FOREIGN KEY ("completedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
