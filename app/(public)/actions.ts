"use server";

import { prisma } from "@/lib/prisma";
import type {  CategoryWithServices, PhotoService, ReservaEvent } from "./types";

export async function getReservasEvent(): Promise<ReservaEvent[]> {
  try {
    const reservas = await prisma.reserva.findMany();

    const eventos: ReservaEvent[] = reservas.map((r) => ({
      id: r.id,
      fecha: r.fecha.toISOString(),
      horaInicio: r.horaInicio.toISOString(),
      horaFin: r.horaFin.toISOString(),
    }));

    return eventos;
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    return [];
  }
}


export async function getCategoriesWithServices(): Promise<CategoryWithServices[]> {
  try {
    const categories = await prisma.category.findMany({
      include: { services: true },
    })

    return categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      services: cat.services.map((svc): PhotoService => ({
        id: svc.id,
        name: svc.name,
        img: svc.img,
        description: svc.description,
        category: cat.name,
      })),
    }))
  } catch (error) {
    console.error("Error al obtener categorías con servicios:", error)
    return []
  }
}

