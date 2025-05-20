"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { PhotoService } from "./type";

// Obtener todos los servicios con el nombre de la categoría
export async function getPhotoServices(): Promise<PhotoService[]> {
  try {
    const servicios = await prisma.photoService.findMany({
      include: {
        category: true,
      },
    });

    return servicios.map((s) => ({
      id: s.id,
      name: s.name,
      img: s.img,
      description: s.description,
      activo: s.activo,
      categoryId: s.categoryId,
      categoriaNombre: s.category?.name ?? "",
    }));
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    return [];
  }
}

// Obtener un servicio por ID
export async function getPhotoServiceById(id: string): Promise<PhotoService | null> {
  try {
    const servicio = await prisma.photoService.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!servicio) return null;

    return {
      id: servicio.id,
      name: servicio.name,
      img: servicio.img,
      description: servicio.description,
      activo: servicio.activo,
      categoryId: servicio.categoryId,
    };
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    return null;
  }
}

// Crear un nuevo servicio
export async function postPhotoService({
  servicio,
}: {
  servicio: PhotoService;
}): Promise<PhotoService | null> {
  try {
    const created = await prisma.photoService.create({
      data: {
        id: randomUUID(),
        name: servicio.name,
        img: servicio.img,
        description: servicio.description,
        activo: servicio.activo ?? true,
        categoryId: servicio.categoryId,
      },
      include: {
        category: true,
      },
    });

    return {
      id: created.id,
      name: created.name,
      img: created.img,
      description: created.description,
      activo: created.activo,
      categoryId: created.categoryId,
    };
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    return null;
  }
}

// Actualizar un servicio existente
export async function putPhotoService({
  servicio,
}: {
  servicio: PhotoService;
}): Promise<PhotoService | null> {
  try {
    const updated = await prisma.photoService.update({
      where: { id: servicio.id },
      data: {
        name: servicio.name,
        img: servicio.img,
        description: servicio.description,
        activo: servicio.activo ?? true,
        categoryId: servicio.categoryId,
      },
      include: {
        category: true,
      },
    });

    return {
      id: updated.id,
      name: updated.name,
      img: updated.img,
      description: updated.description,
      activo: updated.activo,
      categoryId: updated.categoryId,
    };
  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    return null;
  }
}
