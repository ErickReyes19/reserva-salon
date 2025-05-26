"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Unavailability } from "./type";

export async function getUnavailabilities(): Promise<Unavailability[]> {
  const rules = await prisma.unavailability.findMany({ include: { fotografo: true } });
  return rules.map((r) => ({
    id:              r.id,
    fotografoId:     r.fotografoId,
    recurring:       r.recurring,
    weekday:         r.weekday ?? undefined,
    startDate:       r.startDate?.toISOString(),
    endDate:         r.endDate?.toISOString(),
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
    activo:       r.activo,
  };
}

export async function postUnavailability({
  rule,
}: {
  rule: Unavailability;
}): Promise<Unavailability | null> {
  try {
    const created = await prisma.unavailability.create({
      data: {
        id:          randomUUID(),
        fotografoId: rule.fotografoId!,
        recurring:   rule.recurring,
        weekday:     rule.recurring ? rule.weekday! : null,
        startDate:   rule.recurring ? null : new Date(rule.startDate!),
        endDate:     rule.recurring ? null : new Date(rule.endDate!),
        activo:      rule.activo,
      },
      include: { fotografo: true },
    });

    return {
      id:           created.id,
      fotografoId:  created.fotografoId,
      recurring:    created.recurring,
      weekday:      created.weekday ?? undefined,
      startDate:    created.startDate?.toISOString(),
      endDate:      created.endDate?.toISOString(),
      activo:       created.activo,
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
    const updated = await prisma.unavailability.update({
      where: { id: rule.id! },
      data: {
        recurring: rule.recurring,
        weekday:   rule.recurring ? rule.weekday! : null,
        startDate: rule.recurring ? null : new Date(rule.startDate!),
        endDate:   rule.recurring ? null : new Date(rule.endDate!),
        activo:    rule.activo,
      },
      include: { fotografo: true },
    });

    return {
      id:           updated.id,
      fotografoId:  updated.fotografoId,
      recurring:    updated.recurring,
      weekday:      updated.weekday ?? undefined,
      startDate:    updated.startDate?.toISOString(),
      endDate:      updated.endDate?.toISOString(),
      activo:       updated.activo,
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
    activo:          r.activo,
    fotografoNombre: r.fotografo.nombre,
  }));
}
