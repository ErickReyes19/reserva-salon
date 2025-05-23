// app/fotografos/[id]/disponibilidad/actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Unavailability } from "./type";

/** Parse “HH:mm” + fecha opcional a Date válido */
function parseTime(timeStr: string, dateStr?: string): Date {
  const datePart = dateStr?.slice(0, 10) ?? "1970-01-01";
  const full = `${datePart}T${timeStr}:00`;
  const d = new Date(full);
  if (isNaN(d.getTime())) throw new Error(`Hora inválida: ${full}`);
  return d;
}

/** Franjas 00:00–23:59 para reglas semanales */
function defaultFullDay(): { startTime: Date; endTime: Date } {
  return {
    startTime: new Date("1970-01-01T00:00:00.000Z"),
    endTime:   new Date("1970-01-01T23:59:59.999Z"),
  };
}

export async function getUnavailabilities(): Promise<Unavailability[]> {
  const rules = await prisma.unavailability.findMany({ include: { fotografo: true } });
  return rules.map((r) => ({
    id:              r.id,
    fotografoId:     r.fotografoId,
    recurring:       r.recurring,
    weekday:         r.weekday ?? undefined,
    startDate:       r.startDate?.toISOString(),
    endDate:         r.endDate?.toISOString(),
    startTime:       r.startTime?.toISOString(),
    endTime:         r.endTime?.toISOString(),
    activo:          r.activo,
    fotografoNombre: r.fotografo.nombre,
  }));
}

export async function getUnavailabilityById(
  id: string
): Promise<Unavailability | null> {
  const r = await prisma.unavailability.findUnique({
    where: { id },
    include: { fotografo: true },
  });
  if (!r) return null;
  return {
    id:           r.id,
    fotografoId:  r.fotografoId,
    recurring:    r.recurring,
    weekday:      r.weekday ?? undefined,
    startDate:    r.startDate?.toISOString(),
    endDate:      r.endDate?.toISOString(),
    startTime:    r.startTime?.toISOString(),
    endTime:      r.endTime?.toISOString(),
    activo:       r.activo,
  };
}

export async function postUnavailability({
  rule,
}: {
  rule: Unavailability;
}): Promise<Unavailability | null> {
  try {
    // Determinar franjas horarias
    let startTime: Date, endTime: Date;
    if (rule.recurring) {
      ({ startTime, endTime } = defaultFullDay());
    } else {
      startTime = parseTime(rule.startTime!, rule.startDate);
      endTime   = parseTime(rule.endTime!,   rule.endDate);
    }

    const created = await prisma.unavailability.create({
      data: {
        id:          randomUUID(),
        fotografoId: rule.fotografoId!,
        recurring:   rule.recurring,
        weekday:     rule.recurring ? rule.weekday! : null,
        startDate:   rule.recurring ? null : new Date(rule.startDate!),
        endDate:     rule.recurring ? null : new Date(rule.endDate!),
        startTime,
        endTime,
        activo:      rule.activo,
      },
      include: { fotografo: true },
    });

    return {
      id:              created.id,
      fotografoId:     created.fotografoId,
      recurring:       created.recurring,
      weekday:         created.weekday ?? undefined,
      startDate:       created.startDate?.toISOString(),
      endDate:         created.endDate?.toISOString(),
      startTime:       created.startTime!.toISOString(),
      endTime:         created.endTime!.toISOString(),
      activo:          created.activo,
    };
  } catch (error) {
    console.error("Error al crear la indisponibilidad:", error);
    return null;
  }
}

export async function putUnavailability({
  rule,
}: {
  rule: Unavailability;
}): Promise<Unavailability | null> {
  try {
    let startTime: Date, endTime: Date;
    if (rule.recurring) {
      ({ startTime, endTime } = defaultFullDay());
    } else {
      startTime = parseTime(rule.startTime!, rule.startDate);
      endTime   = parseTime(rule.endTime!,   rule.endDate);
    }

    const updated = await prisma.unavailability.update({
      where: { id: rule.id! },
      data: {
        recurring: rule.recurring,
        weekday:   rule.recurring ? rule.weekday! : null,
        startDate: rule.recurring ? null : new Date(rule.startDate!),
        endDate:   rule.recurring ? null : new Date(rule.endDate!),
        startTime,
        endTime,
        activo:    rule.activo,
      },
      include: { fotografo: true },
    });

    return {
      id:              updated.id,
      fotografoId:     updated.fotografoId,
      recurring:       updated.recurring,
      weekday:         updated.weekday ?? undefined,
      startDate:       updated.startDate?.toISOString(),
      endDate:         updated.endDate?.toISOString(),
      startTime:       updated.startTime!.toISOString(),
      endTime:         updated.endTime!.toISOString(),
      activo:          updated.activo,
    };
  } catch (error) {
    console.error("Error al actualizar la indisponibilidad:", error);
    return null;
  }
}

export async function getUnavailabilitiesByFotografoId(
  fotografoId: string
): Promise<Unavailability[]> {
  const rules = await prisma.unavailability.findMany({
    where: { fotografoId },
    include: { fotografo: true },
  });
  return rules.map((r) => ({
    id:              r.id,
    fotografoId:     r.fotografoId,
    recurring:       r.recurring,
    weekday:         r.weekday ?? undefined,
    startDate:       r.startDate?.toISOString(),
    endDate:         r.endDate?.toISOString(),
    startTime:       r.startTime?.toISOString(),
    endTime:         r.endTime?.toISOString(),
    activo:          r.activo,
    fotografoNombre: r.fotografo.nombre,
  }));
}
