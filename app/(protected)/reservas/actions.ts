"use server";
import { prisma } from "@/lib/prisma";
import { Reserva } from "./type";

/**
 * Mapea un registro de Prisma a nuestro tipo Reserva
 */
function mapReserva(r: any): Reserva {
  return {
    fecha: r.fecha,
    horaInicio: r.horaInicio,
    horaFin: r.horaFin.toISOString(),
    fotografoId: r.fotografoId,
    clienteId: r.clienteId,
    estado: r.estado ? "activo" : "inactivo",
    fotografoNombre: r.fotografo?.nombre,
    clienteNombre: r.cliente?.nombre,
  };
}

/**
 * Obtener todas las reservas
 */
export async function getReservas(): Promise<Reserva[]> {
  const reservas = await prisma.reserva.findMany({
    include: { fotografo: true, cliente: true },
  });
  return reservas.map(mapReserva);
}

/**
 * Obtener una reserva por ID
 */
export async function getReservaById(id: string): Promise<Reserva | null> {
  const r = await prisma.reserva.findUnique({
    where: { id },
    include: { fotografo: true, cliente: true },
  });
  return r ? mapReserva(r) : null;
}

/**
 * Valida disponibilidad de un slot de 1 hora con fecha y hora exactas.
 * Úsalo cuando ya tengas un objeto Date con fecha y hora.
 * Devuelve true si el slot está libre.
 */
export async function isSlotAvailableByDate(params: {
  fecha: Date;
  horaInicio: Date;
}): Promise<boolean> {
  const { fecha, horaInicio } = params;
  const start = new Date(fecha);
  start.setHours(horaInicio.getHours(), horaInicio.getMinutes(), 0, 0);
  const end = new Date(start);
  end.setHours(end.getHours() + 1);

  const conflict = await prisma.reserva.findFirst({
    where: {
      AND: [
        { horaInicio: { lt: end } },
        { horaFin:    { gt: start } }
      ]
    }
  });
  console.log("🚀 ~ conflict:", conflict)

  return conflict === null;
}

/**
 * Valida disponibilidad de un slot de 1 hora usando hora numérica (0-23) y fecha.
 * La hora 9 equivale a las 9:00 AM, 15 a las 3:00 PM.
 * Úsalo en front cuando solo tengas fecha + número de hora.
 */
export async function isSlotAvailableByHourNumber(params: {
  fecha: Date;
  horaInicioNumber: number;
}): Promise<boolean> {
  const { fecha, horaInicioNumber } = params;
  if (horaInicioNumber < 0 || horaInicioNumber > 23) return false;

  const start = new Date(Date.UTC(
    fecha.getUTCFullYear(),
    fecha.getUTCMonth(),
    fecha.getUTCDate(),
    horaInicioNumber, 0, 0, 0
  ));

  return isSlotAvailableByDate({ fecha, horaInicio: start });
}

/**
 * Valida disponibilidad de un slot de 1 hora usando hora en string y fecha.
 * Parsea la hora como entero; si no es válido, retorna false.
 */
export async function isSlotAvailableByHourString(params: {
  fecha: Date;
  horaInicioString: string;
}): Promise<boolean> {
  const { fecha, horaInicioString } = params;
  const parsed = parseInt(horaInicioString, 10);
  if (isNaN(parsed) || parsed < 0 || parsed > 23) return false;
  const start = new Date(fecha);
  start.setHours(parsed, 0, 0, 0);
  return isSlotAvailableByDate({ fecha, horaInicio: start });
}

/**
 * Crear una nueva reserva (valida slot antes)
 */
export async function createReserva(data: {
  fecha: Date;
  horaInicio: Date;
  fotografoId: string;
  clienteId: string;
}): Promise<Reserva> {
  const { fecha, horaInicio, fotografoId, clienteId } = data;
  const isAvailable = await isSlotAvailableByDate({ fecha, horaInicio });
  if (!isAvailable) {
    throw new Error("El horario ya está ocupado");
  }

  const horaFin = new Date(horaInicio);
  horaFin.setHours(horaFin.getHours() + 1);

  const created = await prisma.reserva.create({
    data: { fecha, horaInicio, horaFin, fotografoId, clienteId, estado: true },
    include: { fotografo: true, cliente: true },
  });

  return mapReserva(created);
}

/**
 * Actualizar una reserva existente
 */
export async function updateReserva(data: {
  id: string;
  fecha?: Date;
  horaInicio?: Date;
  estado?: boolean;
}): Promise<Reserva> {
  const updateData: any = {};
  if (data.fecha)      updateData.fecha = data.fecha;
  if (data.horaInicio) updateData.horaInicio = data.horaInicio;
  if (data.estado !== undefined) updateData.estado = data.estado;

  if (data.horaInicio) {
    const hf = new Date(data.horaInicio);
    hf.setHours(hf.getHours() + 1);
    updateData.horaFin = hf;
  }

  const updated = await prisma.reserva.update({
    where: { id: data.id },
    data: updateData,
    include: { fotografo: true, cliente: true },
  });

  return mapReserva(updated);
}

/**
 * Eliminar una reserva
 */
export async function deleteReserva(id: string): Promise<Reserva> {
  const deleted = await prisma.reserva.delete({
    where: { id },
    include: { fotografo: true, cliente: true },
  });
  return mapReserva(deleted);
}
