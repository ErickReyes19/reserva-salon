"use server";

import { prisma } from "@/lib/prisma";
import { startOfDay } from "date-fns";

import type { CategoryWithServices, PhotoService, ReservaEvent } from "./types";

export async function getReservasEvent(): Promise<ReservaEvent[]> {
  try {
    const hoy = startOfDay(new Date()); // Comienza a las 00:00 de hoy

    const reservas = await prisma.reserva.findMany({
      where: {
        fecha: {
          gte: hoy,
        },
      },
    });
   
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
      where: { activo: true },
      include: {
        services: {
          include: {
            // Incluimos la relación a través de la tabla intermedia
            fotografos: {
              include: {
                fotografo: true, // Aquí obtenemos el objeto Fotografo
              },
            },
          },
        },
      },
    });

    return categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      services: cat.services.map((svc): PhotoService => ({
        id: svc.id,
        name: svc.name,
        img: svc.img,
        description: svc.description,
        precio: svc.precio,
        category: cat.name,
        fotografos: svc.fotografos.map(fs => fs.fotografo.nombre), // aquí extraemos solo el nombre
      })),
    }));
  } catch (error) {
    console.error("Error al obtener categorías con servicios:", error);
    return [];
  }
}



