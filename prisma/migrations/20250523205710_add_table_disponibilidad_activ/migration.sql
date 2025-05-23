-- AlterTable
ALTER TABLE `Unavailability` MODIFY `startTime` DATETIME(3) NULL,
    MODIFY `endTime` DATETIME(3) NULL,
    MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- RenameIndex
ALTER TABLE `Unavailability` RENAME INDEX `Unavailability_fotografoId_fkey` TO `Unavailability_fotografoId_idx`;
