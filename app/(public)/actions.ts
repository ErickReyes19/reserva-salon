"use server";

import { prisma } from "@/lib/prisma";
import type { ReservaEvent } from "./types";

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
