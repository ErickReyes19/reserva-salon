import { PrismaClient } from "../app/generated/prisma";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { addHours } from "date-fns";

const globalForPrisma = globalThis as typeof globalThis & { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

async function main() {
  console.log("🔌 Conectando a la base de datos...");

  // ---------- Permisos ----------
  const permisoNames = [
    "ver_permisos", "ver_roles", "crear_roles", "editar_roles",
    "ver_usuarios", "crear_usuario", "editar_usuario"
  ];

  const permisos = await Promise.all(
    permisoNames.map((nombre) =>
      prisma.permiso.upsert({
        where: { nombre },
        update: {},
        create: {
          id: randomUUID(),
          nombre,
          descripcion: `Permite ${nombre.replace(/_/g, " ")}`,
          activo: true
        }
      })
    )
  );
  console.log("✅ Permisos seed completado");

  // ---------- Rol Administrador ----------
  const rolAdmin = await prisma.rol.upsert({
    where: { nombre: "administrador" },
    update: {},
    create: {
      id: randomUUID(),
      nombre: "administrador",
      descripcion: "Rol con todos los permisos de administración",
      activo: true,
      permisos: {
        create: permisos.map(p => ({
          id: randomUUID(),
          permiso: { connect: { id: p.id } }
        }))
      }
    }
  });
  console.log("✅ Rol administrador seed completado");

  // ---------- Usuario Admin ----------
  const adminEmail = "erickjosepineda33@gmail.com";
  const hashedPassword = await bcrypt.hash("erick.reyes", 10);
  await prisma.usuario.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      id: randomUUID(),
      nombre: "Erick Reyes",
      email: adminEmail,
      password: hashedPassword,
      activo: true,
      rolId: rolAdmin.id,
      debeCambiar: true
    }
  });
  console.log("✅ Usuario administrador seed completado");

  // ---------- Fotógrafos ----------
  const fotografoIds: string[] = [];
  const fotografoData = [
    { nombre: "Ana Gómez", email: "ana.gomez@example.com", telefono: "+50412345678", bio: "Especialista en retratos" },
    { nombre: "Luis Pérez", email: "luis.perez@example.com", telefono: "+50487654321", bio: "Fotógrafo de estudio" }
  ];

  for (const { nombre, email, telefono, bio } of fotografoData) {
    const user = await prisma.usuario.upsert({
      where: { email },
      update: {},
      create: {
        id: randomUUID(),
        nombre,
        email,
        password: await bcrypt.hash("password123", 10),
        activo: true,
        rolId: rolAdmin.id,
        debeCambiar: false
      }
    });
    const fotografo = await prisma.fotografo.upsert({
      where: { usuarioId: user.id },
      update: {},
      create: {
        id: randomUUID(),
        usuarioId: user.id,
        telefono,
        bio
      }
    });
    fotografoIds.push(fotografo.id);
    console.log(`✅ Fotógrafo seed: ${nombre} (${email})`);
  }

  // ---------- Cliente (Usuario) ----------
  const cliente = await prisma.usuario.upsert({
    where: { email: "cliente.test@example.com" },
    update: {},
    create: {
      id: randomUUID(),
      nombre: "Cliente de Prueba",
      email: "cliente.test@example.com",
      password: await bcrypt.hash("cliente123", 10),
      activo: true,
      rolId: rolAdmin.id, // Cambia a rolCliente si lo tienes separado
      debeCambiar: false
    }
  });

  // ---------- Disponibilidad Semanal ----------
  const disponibilidadData = [
    { diaSemana: 1, horaInicio: "09:00", horaFin: "13:00" },
    { diaSemana: 1, horaInicio: "14:00", horaFin: "18:00" },
    { diaSemana: 2, horaInicio: "09:00", horaFin: "18:00" },
    { diaSemana: 3, horaInicio: "09:00", horaFin: "18:00" },
    { diaSemana: 4, horaInicio: "09:00", horaFin: "18:00" },
    { diaSemana: 5, horaInicio: "09:00", horaFin: "18:00" },
    { diaSemana: 6, horaInicio: "10:00", horaFin: "14:00" }
  ];

  await Promise.all(
    disponibilidadData.map(slot =>
      prisma.disponibilidad.upsert({
        where: { id: slot.diaSemana.toString() },
        update: {},
        create: {
          id: randomUUID(),
          diaSemana: slot.diaSemana,
          horaInicio: slot.horaInicio,
          horaFin: slot.horaFin,
          activo: true
        }
      })
    )
  );
  console.log("✅ Disponibilidad seed completado");

  // ---------- Reservas ----------
  const now = new Date();
  const reservasData = [
    {
      nombreCliente: "Juan López",
      emailCliente: "juan.lopez@example.com",
      fecha: addHours(now, 2), // hoy + 2h
      horaFin: addHours(now, 3),
      fotografoId: fotografoIds[0]
    },
    {
      nombreCliente: "Maria Ramos",
      emailCliente: "maria.ramos@example.com",
      fecha: addHours(now, 5),
      horaFin: addHours(now, 6),
      fotografoId: fotografoIds[1]
    }
  ];

  for (const reserva of reservasData) {
    await prisma.reserva.create({
      data: {
        id: randomUUID(),
        clienteId: cliente.id,
        nombreCliente: reserva.nombreCliente,
        emailCliente: reserva.emailCliente,
        fotografoId: reserva.fotografoId,
        fecha: reserva.fecha,
        horaInicio: reserva.fecha, // Assuming horaInicio is the same as fecha; adjust as needed
        horaFin: reserva.horaFin,
        pixelpayOrder: randomUUID(),
        estado: "PENDIENTE"
      }
    });
  }
  console.log("✅ Reservas seed completado");

  console.log("🎉 Seed completado exitosamente.");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🔌 Desconectado de la base de datos.");
  });
