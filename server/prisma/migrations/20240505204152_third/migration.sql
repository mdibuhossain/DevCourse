/*
  Warnings:

  - You are about to drop the column `type` on the `transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[walletId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiryDate` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `coupon` ADD COLUMN `expiryDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `course` ADD COLUMN `discount` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `type`;

-- CreateIndex
CREATE UNIQUE INDEX `User_walletId_key` ON `User`(`walletId`);
