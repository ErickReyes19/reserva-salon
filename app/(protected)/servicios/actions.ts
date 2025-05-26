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
      precio: s.precio,
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
      include: {
        category: true,
        fotografos: {
          select: {
            fotografoId: true, // Solo traer el ID
          },
        },
      },
    });

    if (!servicio) return null;

    return {
      id: servicio.id,
      name: servicio.name,
      img: servicio.img,
      description: servicio.description,
      precio: servicio.precio,
      activo: servicio.activo,
      categoryId: servicio.categoryId,
      categoriaNombre: servicio.category?.name ?? "",
      fotografos: servicio.fotografos.map(f => f.fotografoId), // Array de strings (IDs)
    };
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    return null;
  }
}


export async function postPhotoService({
  servicio,
}: {
  servicio: PhotoService; // Aquí PhotoService con fotografos: string[]
}): Promise<PhotoService | null> {
  try {
    const id = randomUUID();

    // 1. Crear servicio sin relacionar fotógrafos
    const created = await prisma.photoService.create({
      data: {
        id,
        name: servicio.name,
        img: servicio.img,
        description: servicio.description,
        precio: servicio.precio ?? 0,
        activo: servicio.activo ?? true,
        categoryId: servicio.categoryId,
      },
      include: {
        category: true,
      },
    });

    // 2. Crear relaciones en tabla intermedia FotografoServicio
    if (servicio.fotografos && servicio.fotografos.length > 0) {
      await prisma.fotografoServicio.createMany({
        data: servicio.fotografos.map((fotografoId) => ({
          fotografoId,
          servicioId: id,
        })),
        skipDuplicates: true,
      });
    }

    // 3. Retornar el servicio creado con los IDs de fotógrafos (no objetos)
    return {
      id: created.id,
      name: created.name,
      img: created.img,
      description: created.description,
      precio: created.precio,
      activo: created.activo,
      categoryId: created.categoryId,
      categoriaNombre: created.category?.name ?? "",
      fotografos: servicio.fotografos, // Array de strings, no de objetos
    };
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    return null;
  }
}


export async function putPhotoService({
  servicio,
}: {
  servicio: PhotoService; // donde fotografos es string[] (ids)
}): Promise<PhotoService | null> {
  try {
    if (!servicio.id) throw new Error("El servicio debe tener un id para actualizar.");

    // 1. Actualizar datos básicos (sin relacionar fotógrafos)
    const updated = await prisma.photoService.update({
      where: { id: servicio.id },
      data: {
        name: servicio.name,
        img: servicio.img,
        description: servicio.description,
        precio: servicio.precio ?? 0,
        activo: servicio.activo ?? true,
        categoryId: servicio.categoryId,
      },
      include: {
        category: true,
      },
    });

    // 2. Borrar relaciones existentes
    await prisma.fotografoServicio.deleteMany({
      where: {
        servicioId: servicio.id,
      },
    });

    // 3. Crear nuevas relaciones
    if (servicio.fotografos && servicio.fotografos.length > 0) {
      await prisma.fotografoServicio.createMany({
        data: servicio.fotografos.map((fotografoId) => ({
          fotografoId,
          servicioId: servicio.id!,
        })),
        skipDuplicates: true,
      });
    }

    return {
      id: updated.id,
      name: updated.name,
      img: updated.img,
      description: updated.description,
      precio: updated.precio,
      activo: updated.activo,
      categoryId: updated.categoryId,
      categoriaNombre: updated.category?.name ?? "",
      fotografos: servicio.fotografos, // devolvemos los ids
    };
  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    return null;
  }
}

