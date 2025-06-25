/*
  Warnings:

  - You are about to drop the column `fotografoId` on the `Reserva` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Reserva` DROP FOREIGN KEY `Reserva_fotografoId_fkey`;

-- DropIndex
DROP INDEX `Reserva_fotografoId_fkey` ON `Reserva`;

-- AlterTable
ALTER TABLE `Reserva` DROP COLUMN `fotografoId`;

-- CreateTable
CREATE TABLE `ReservaFotografo` (
    `reservaId` VARCHAR(191) NOT NULL,
    `fotografoId` VARCHAR(191) NOT NULL,

    INDEX `ReservaFotografo_fotografoId_idx`(`fotografoId`),
    PRIMARY KEY (`reservaId`, `fotografoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReservaFotografo` ADD CONSTRAINT `ReservaFotografo_reservaId_fkey` FOREIGN KEY (`reservaId`) REFERENCES `Reserva`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReservaFotografo` ADD CONSTRAINT `ReservaFotografo_fotografoId_fkey` FOREIGN KEY (`fotografoId`) REFERENCES `Fotografo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
