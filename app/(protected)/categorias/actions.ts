"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Category } from "./types";

export async function getCategorias(): Promise<Category[]> {
  try {
    const categorias = await prisma.category.findMany();
    return categorias.map((c) => ({
      id: c.id,
      name: c.name,
      activo: c.activo,
    }));
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    return [];
  }
}

export async function getCategoriasActivas(): Promise<Category[]> {
  try {
    const categorias = await prisma.category.findMany({
      where: { activo: true },
    });
    return categorias.map((c) => ({
      id: c.id,
      name: c.name,
      activo: c.activo,
    }));
  } catch (error) {
    console.error("Error al obtener categorías activas:", error);
    return [];
  }
}

export async function getCategoriaById(id: string): Promise<Category | null> {
  try {
    const categoria = await prisma.category.findUnique({ where: { id } });

    if (!categoria) return null;

    return {
      id: categoria.id,
      name: categoria.name,
      activo: categoria.activo,
    };
  } catch (error) {
    console.error("Error al obtener la categoría por ID:", error);
    return null;
  }
}

export async function postCategoria({ categoria }: { categoria: Category }): Promise<Category | null> {
  try {
    const created = await prisma.category.create({
      data: {
        id: randomUUID(),
        name: categoria.name,
        activo: categoria.activo ?? true,
      },
    });

    return {
      id: created.id,
      name: created.name,
      activo: created.activo,
    };
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    return null;
  }
}

export async function putCategoria({ categoria }: { categoria: Category }): Promise<Category | null> {
  try {
    const updated = await prisma.category.update({
      where: { id: categoria.id },
      data: {
        name: categoria.name,
        activo: categoria.activo ?? true,
      },
    });

    return {
      id: updated.id,
      name: updated.name,
      activo: updated.activo,
    };
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    return null;
  }
}
