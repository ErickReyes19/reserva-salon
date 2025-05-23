-- CreateTable
CREATE TABLE `Unavailability` (
    `id` VARCHAR(191) NOT NULL,
    `fotografoId` VARCHAR(191) NOT NULL,
    `recurring` BOOLEAN NOT NULL,
    `weekday` INTEGER NULL,
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Unavailability` ADD CONSTRAINT `Unavailability_fotografoId_fkey` FOREIGN KEY (`fotografoId`) REFERENCES `Fotografo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
