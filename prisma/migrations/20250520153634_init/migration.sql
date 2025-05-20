/*
  Warnings:

  - Added the required column `Foto` to the `Fotografo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Fotografo` ADD COLUMN `Foto` VARCHAR(191) NOT NULL;
