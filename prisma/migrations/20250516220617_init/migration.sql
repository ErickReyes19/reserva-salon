-- CreateTable
CREATE TABLE `Rol` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `activo` BOOLEAN NOT NULL,

    UNIQUE INDEX `Rol_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `activo` BOOLEAN NOT NULL,

    UNIQUE INDEX `Permiso_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RolPermiso` (
    `id` VARCHAR(191) NOT NULL,
    `rolId` VARCHAR(191) NOT NULL,
    `permisoId` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `RolPermiso_permisoId_fkey`(`permisoId`),
    UNIQUE INDEX `RolPermiso_rolId_permisoId_key`(`rolId`, `permisoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `activo` BOOLEAN NOT NULL,
    `rolId` VARCHAR(191) NOT NULL,
    `debeCambiar` BOOLEAN NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    INDEX `Usuario_rolId_fkey`(`rolId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fotografo` (
    `id` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,

    UNIQUE INDEX `Fotografo_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disponibilidad` (
    `id` VARCHAR(191) NOT NULL,
    `diaSemana` INTEGER NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `horaFin` VARCHAR(191) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `id` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `horaFin` DATETIME(3) NOT NULL,
    `nombreCliente` VARCHAR(191) NOT NULL,
    `emailCliente` VARCHAR(191) NOT NULL,
    `clienteId` VARCHAR(191) NOT NULL,
    `fotografoId` VARCHAR(191) NOT NULL,
    `pixelpayOrder` VARCHAR(191) NOT NULL,
    `estado` ENUM('PENDIENTE', 'CONFIRMADA', 'CANCELADA') NOT NULL DEFAULT 'PENDIENTE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Reserva_pixelpayOrder_key`(`pixelpayOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RolPermiso` ADD CONSTRAINT `RolPermiso_permisoId_fkey` FOREIGN KEY (`permisoId`) REFERENCES `Permiso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolPermiso` ADD CONSTRAINT `RolPermiso_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fotografo` ADD CONSTRAINT `Fotografo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_fotografoId_fkey` FOREIGN KEY (`fotografoId`) REFERENCES `Fotografo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
