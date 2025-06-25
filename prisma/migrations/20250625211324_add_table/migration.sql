-- CreateTable
CREATE TABLE `AvailabilityException` (
    `id` VARCHAR(191) NOT NULL,
    `unavailabilityId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `disponible` BOOLEAN NOT NULL,

    INDEX `AvailabilityException_unavailabilityId_idx`(`unavailabilityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AvailabilityException` ADD CONSTRAINT `AvailabilityException_unavailabilityId_fkey` FOREIGN KEY (`unavailabilityId`) REFERENCES `Unavailability`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
