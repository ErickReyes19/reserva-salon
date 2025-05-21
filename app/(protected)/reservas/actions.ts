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
 * Validar disponibilidad de un slot (fecha, horaInicio, horaFin) para un fotógrafo
 * Devuelve true si el slot está libre, false si existe conflicto
 */
export async function validateSlot(params: {
  fecha: Date;
  horaInicio: Date;
  horaFin: Date;
  fotografoId: string;
}): Promise<boolean> {
  const { horaInicio, horaFin, fotografoId } = params;
  const conflict = await prisma.reserva.findFirst({
    where: {
      fotografoId,
      AND: [
        { horaInicio: { lt: horaFin } },
        { horaFin:    { gt: horaInicio } }
      ]
    }
  });

  return conflict === null;
}

/**
 * Validar disponibilidad de un slot de 1 hora dado `fecha` y `horaInicio` para un fotógrafo
 * Asume que la reserva dura 1 hora
 * Devuelve true si el slot está libre, false si existe conflicto
 */
export async function isSlotAvailableOneHour(params: {
  fecha: Date;
  horaInicio: Date;
  fotografoId: string;
}): Promise<boolean> {
  const { horaInicio, fotografoId } = params;
  // Calculamos horaFin sumando 1 hora
  const horaFin = new Date(horaInicio);
  horaFin.setHours(horaFin.getHours() + 1);
  return validateSlot({ fecha: params.fecha, horaInicio, horaFin, fotografoId });
}

/**
 * Crear una nueva reserva (valida slot antes)
 */
export async function createReserva(data: {
  fecha: Date;
  horaInicio: Date;
  horaFin: Date;
  fotografoId: string;
  clienteId: string;
}): Promise<Reserva> {
  const { fecha, horaInicio, horaFin, fotografoId, clienteId } = data;
  const isAvailable = await validateSlot({ fecha, horaInicio, horaFin, fotografoId });
  if (!isAvailable) {
    throw new Error("El horario ya está ocupado");
  }

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
  horaFin?: Date;
  estado?: boolean;
}): Promise<Reserva> {
  const updateData: any = {};
  if (data.fecha)       updateData.fecha = data.fecha;
  if (data.horaInicio)  updateData.horaInicio = data.horaInicio;
  if (data.horaFin)      updateData.horaFin = data.horaFin;
  if (data.estado !== undefined) updateData.estado = data.estado;

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
