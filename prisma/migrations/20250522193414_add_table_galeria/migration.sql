-- CreateTable
CREATE TABLE `galeria` (
    `id` VARCHAR(191) NOT NULL,
    `nombreFoto` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `fotografoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `galeria` ADD CONSTRAINT `galeria_fotografoId_fkey` FOREIGN KEY (`fotografoId`) REFERENCES `Fotografo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
