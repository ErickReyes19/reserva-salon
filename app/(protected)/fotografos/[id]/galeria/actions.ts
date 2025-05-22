"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Galeria } from "./type"; // Asegúrate de que esté bien definido con fotografoNombre opcional si lo necesitas

// Obtener todas las fotos de la galería
export async function getGalerias(): Promise<Galeria[]> {
  try {
    const galerias = await prisma.galeria.findMany({
      include: {
        fotografo: true,
      },
    });

    return galerias.map((g) => ({
      id: g.id,
      nombreFoto: g.nombreFoto,
      url: g.url,
      fotografoId: g.fotografoId,
      fotografoNombre: g.fotografo?.nombre ?? "",
    }));
  } catch (error) {
    console.error("Error al obtener la galería:", error);
    return [];
  }
}

// Obtener una foto por ID
export async function getGaleriaById(id: string): Promise<Galeria | null> {
  try {
    const g = await prisma.galeria.findUnique({
      where: { id },
      include: { fotografo: true },
    });

    if (!g) return null;

    return {
      id: g.id,
      nombreFoto: g.nombreFoto,
      url: g.url,
      fotografoId: g.fotografoId,
      fotografoNombre: g.fotografo?.nombre ?? "",
    };
  } catch (error) {
    console.error("Error al obtener la foto:", error);
    return null;
  }
}

// Crear nueva foto en la galería
export async function postGaleria({
  galeria,
}: {
  galeria: Galeria;
}): Promise<Galeria | null> {
  try {
    const created = await prisma.galeria.create({
      data: {
        id: randomUUID(),
        nombreFoto: galeria.nombreFoto,
        url: galeria.url,
        fotografoId: galeria.fotografoId!,
      },
      include: {
        fotografo: true,
      },
    });

    return {
      id: created.id,
      nombreFoto: created.nombreFoto,
      url: created.url,
      fotografoId: created.fotografoId,
      fotografoNombre: created.nombreFoto,
    };
  } catch (error) {
    console.error("Error al crear la foto:", error);
    return null;
  }
}

// Actualizar una foto de la galería
export async function putGaleria({
  galeria,
}: {
  galeria: Galeria;
}): Promise<Galeria | null> {
  try {
    const updated = await prisma.galeria.update({
      where: { id: galeria.id },
      data: {
        nombreFoto: galeria.nombreFoto,
        url: galeria.url,
      },
      include: {
        fotografo: true,
      },
    });

    return {
      id: updated.id,
      nombreFoto: updated.nombreFoto,
      url: updated.url,
      fotografoId: updated.fotografoId,
    };
  } catch (error) {
    console.error("Error al actualizar la foto:", error);
    return null;
  }
}

// Obtener todas las fotos por ID del fotógrafo
export async function getGaleriasByFotografoId(fotografoId: string): Promise<Galeria[]> {
  try {
    const galerias = await prisma.galeria.findMany({
      where: { fotografoId },
      include: { fotografo: true },
    });

    return galerias.map((g) => ({
      id: g.id,
      nombreFoto: g.nombreFoto,
      url: g.url,
      fotografoId: g.fotografoId,
      fotografoNombre: g.fotografo?.nombre ?? "",
    }));
  } catch (error) {
    console.error("Error al obtener las fotos por fotógrafo:", error);
    return [];
  }
}

