"use server";

import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { Cliente } from "./types";

export async function getClientes(): Promise<Cliente[]> {
  try {
    const cliente = await prisma.cliente.findMany();
    return cliente.map((c) => ({
      id: c.id,
      nombre: c.nombre,
      email: c.email,
      telefono: c.telefono,
    }));
  } catch (error) {
    console.error("Error al obtener el cliente:", error);
    return [];
  }
}


export async function getClienteById(id: string): Promise<Cliente | null> {
  try {
    const cliente = await prisma.cliente.findUnique({ where: { id } });

    if (!cliente) return null;

    return {
      id: cliente.id,
      nombre: cliente.nombre,
      email: cliente.email,
      telefono: cliente.telefono,
    };
  } catch (error) {
    console.error("Error al obtener el cliente por ID:", error);
    return null;
  }
}

export async function postCliente({ cliente }: { cliente: Cliente }): Promise<Cliente | null> {
  try {
    const created = await prisma.cliente.create({
      data: {
        id: randomUUID(),
        nombre: cliente.nombre,
        email: cliente.email,
        telefono: cliente.telefono,
      },
    });

    return {
      id: created.id,
      nombre: created.nombre,
      email: created.email,
      telefono: created.telefono,
    };
  } catch (error) {
    console.error("Error al crear el cliente:", error);
    return null;
  }
}

export async function putCliente({  cliente }: { cliente: Cliente }): Promise<Cliente | null> {
  try {
    const updated = await prisma.cliente.update({
      where: { id: cliente.id },
      data: {
        nombre: cliente.nombre,
        email: cliente.email,
        telefono: cliente.telefono,
      },
    });

    return {
      id: updated.id,
      nombre: updated.nombre,
      email: updated.email,
      telefono: updated.telefono,
    };
  } catch (error) {
    console.error("Error al actualizar el cliente:", error);
    return null;
  }
}
