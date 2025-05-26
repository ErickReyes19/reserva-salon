-- AlterTable
ALTER TABLE `Reserva` ADD COLUMN `photoServiceId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Reserva_photoServiceId_fkey` ON `Reserva`(`photoServiceId`);

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_photoServiceId_fkey` FOREIGN KEY (`photoServiceId`) REFERENCES `PhotoService`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
