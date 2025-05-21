/*
  Warnings:

  - You are about to drop the column `pixelpayOrder` on the `Reserva` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Reserva_pixelpayOrder_key` ON `Reserva`;

-- AlterTable
ALTER TABLE `Reserva` DROP COLUMN `pixelpayOrder`;
