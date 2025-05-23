/*
  Warnings:

  - Added the required column `activo` to the `Unavailability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Unavailability` ADD COLUMN `activo` BOOLEAN NOT NULL;
