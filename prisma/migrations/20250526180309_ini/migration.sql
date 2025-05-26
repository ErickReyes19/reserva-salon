-- AlterTable
ALTER TABLE `PhotoService` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- RenameIndex
ALTER TABLE `FotografoServicio` RENAME INDEX `FotografoServicio_servicioId_fkey` TO `FotografoServicio_servicioId_idx`;
