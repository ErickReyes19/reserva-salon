"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Fotografo } from "./type"; // Asegúrate de tener este tipo definido con usuarioNombre opcional





// Obtener todos los fotógrafos
export async function getFotografos(): Promise<Fotografo[]> {
  try {
    const fotografos = await prisma.fotografo.findMany({
      include: {
        usuario: true,
      },
    });

    return fotografos.map((f) => ({
      id: f.id,
      usuarioId: f.usuarioId,
      nombre: f.nombre,
      telefono: f.telefono ?? "",
      email: f.usuario.email ?? "",
      bio: f.bio ?? "",
      url: f.url ?? "",
      Foto: f.Foto,
      disponible: f.disponible,
      usuarioNombre: f.usuario?.nombre ?? "",
    }));
  } catch (error) {
    console.error("Error al obtener los fotógrafos:", error);
    return [];
  }
}
// Obtener todos los fotógrafos
export async function getFotografosDisponibles(
  reservationDate: Date
): Promise<Fotografo[]> {
  const weekday = reservationDate.getDay(); // 0-6
  const dateISO = reservationDate.toISOString().slice(0, 10);

  // Trae todos los fotógrafos disponibles con sus indisponibilidades y excepciones
  const fotografos = await prisma.fotografo.findMany({
    where: { disponible: true },
    include: {
      usuario: true,
      unavailabilities: {
        where: { activo: true },
        include: { exceptions: true },
      },
    },
  });

  // Filtra en JS según la lógica de excepciones
  const disponibles = fotografos.filter((f) => {
    // Si alguna excepción positiva existe para ese día, el fotógrafo está disponible
    const tieneExcepcionPositiva = f.unavailabilities.some((u) =>
      u.exceptions.some((ex) =>
        ex.date.toISOString().slice(0, 10) === dateISO && ex.disponible === true
      )
    );
    if (tieneExcepcionPositiva) return true;

    // Si no hay excepción positiva, revisa si tiene alguna indisponibilidad que aplique
    const tieneIndisponibilidad = f.unavailabilities.some((u) => {
      if (u.recurring && u.weekday === weekday) return true;
      if (
        !u.recurring &&
        u.startDate &&
        u.endDate &&
        reservationDate >= u.startDate &&
        reservationDate <= u.endDate
      ) {
        return true;
      }
      return false;
    });
    return !tieneIndisponibilidad;
  });

  return disponibles.map((f) => ({
    id: f.id,
    usuarioId: f.usuarioId,
    nombre: f.nombre,
    email: f.usuario.email ?? "",
    telefono: f.telefono ?? "",
    bio: f.bio ?? "",
    url: f.url ?? "",
    Foto: f.Foto,
    disponible: f.disponible,
    usuarioNombre: f.usuario?.nombre ?? "",
  }));
}
// Obtener fotógrafo por ID
export async function getFotografoById(id: string): Promise<Fotografo | null> {
  try {
    const f = await prisma.fotografo.findUnique({
      where: { id },
      include: { usuario: true },
    });

    if (!f) return null;

    return {
      id: f.id,
      usuarioId: f.usuarioId,
      nombre: f.nombre,
      telefono: f.telefono ?? "",
      email: f.usuario.email ?? "",
      bio: f.bio ?? "",
      url: f.url ?? "",
      Foto: f.Foto,
      disponible: f.disponible,
      usuarioNombre: f.usuario?.nombre ?? "",
    };
  } catch (error) {
    console.error("Error al obtener el fotógrafo:", error);
    return null;
  }
}

// Crear nuevo fotógrafo
export async function postFotografo({
  fotografo,
}: {
  fotografo: Fotografo;
}): Promise<Fotografo | null> {
  try {
    const created = await prisma.fotografo.create({
      data: {
        id: randomUUID(),
        nombre: fotografo.nombre,
        usuarioId: fotografo.usuarioId,
        telefono: fotografo.telefono,
        bio: fotografo.bio,
        url: fotografo.url,
        Foto: fotografo.Foto,
        disponible: true
      },
      include: { usuario: true },
    });

    return {
      id: created.id,
      usuarioId: created.usuarioId,
      telefono: created.telefono ?? "",
      email: created.usuario.email ?? "",
      bio: created.bio ?? "",
      url: created.url ?? "",
      nombre: created.nombre,
      Foto: created.Foto,
      disponible: created.disponible,
    };
  } catch (error) {
    console.error("Error al crear el fotógrafo:", error);
    return null;
  }
}

// Actualizar fotógrafo existente
export async function putFotografo({
  fotografo,
}: {
  fotografo: Fotografo;
}): Promise<Fotografo | null> {
  try {
    const updated = await prisma.fotografo.update({
      where: { id: fotografo.id },
      data: {
        usuarioId: fotografo.usuarioId,
        telefono: fotografo.telefono,
        bio: fotografo.bio,
        url: fotografo.url,
        Foto: fotografo.Foto,
        disponible: fotografo.disponible,
        nombre: fotografo.nombre
      },
      include: { usuario: true },
    });

    return {
      id: updated.id,
      usuarioId: updated.usuarioId,
      telefono: updated.telefono ?? "",
      email: updated.usuario.email ?? "",
      bio: updated.bio ?? "",
      nombre: updated.nombre,
      url: updated.url ?? "",
      Foto: updated.Foto,
      disponible: updated.disponible,
      usuarioNombre: updated.usuario?.nombre ?? "",
    };
  } catch (error) {
    console.error("Error al actualizar el fotógrafo:", error);
    return null;
  }
}
