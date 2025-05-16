"use server";

import { prisma } from "@/lib/prisma";
import type { ReservaEvent } from "./types";

export async function getReservasEvent(): Promise<ReservaEvent[]> {
  try {
    const reservas = await prisma.reserva.findMany({
      include: {
        fotografo: {
          include: { usuario: true },
        },
      },
    });

    const eventos: ReservaEvent[] = reservas.map((r) => {
      const startDateTime = new Date(r.fecha);
      startDateTime.setHours(r.horaInicio.getHours(), r.horaInicio.getMinutes(), 0, 0);

      const endDateTime = new Date(r.fecha);
      endDateTime.setHours(r.horaFin.getHours(), r.horaFin.getMinutes(), 0, 0);

      return {
        id: r.id,
        title: `${r.nombreCliente} → ${r.fotografo.usuario.nombre}`,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        estado: r.estado,
        emailCliente: r.emailCliente,
      };
    });

    return eventos;
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    return [];
  }
}
