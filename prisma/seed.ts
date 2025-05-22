import { PrismaClient } from "../app/generated/prisma";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { addHours } from "date-fns";

const globalForPrisma = globalThis as typeof globalThis & { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

async function main() {
  console.log("🔌 Conectando a la base de datos...");

  /*
  // Limpiar datos de pruebas (excepto permisos/roles/usuarios admin existentes)
  // await prisma.reserva.deleteMany();
  // await prisma.fotografo.deleteMany();
  // await prisma.usuario.deleteMany();
  // await prisma.cliente.deleteMany({ where: { email: "cliente.test@example.com" } });
  // await prisma.rolPermiso.deleteMany();
  // await prisma.permiso.deleteMany();
  // await prisma.rol.deleteMany();
  */

  // Los permisos que quieres asegurar que existan:
  const permisoNames = [
    "ver_permisos", "ver_roles", "crear_roles", "editar_roles",
    "ver_usuarios", "crear_usuario", "editar_usuario", "ver_categoria", "crear_categoria",
    "editar_categoria", "ver_servicios", "crear_servicios", "editar_servicios",
    "editar_fotografos", "ver_fotografos", "crear_fotografos", "ver_clientes", "crear_clientes", "ver_reservas",
    "ver_galeria", "crear_foto", "editar_fotos"
  ];

  // Buscar o crear permisos y guardar sus ids
  const permisosIds: string[] = [];
  for (const nombre of permisoNames) {
    let permiso = await prisma.permiso.findUnique({ where: { nombre } });
    if (!permiso) {
      permiso = await prisma.permiso.create({
        data: {
          id: randomUUID(),
          nombre,
          descripcion: `Permite ${nombre.replace(/_/g, " ")}`,
          activo: true,
        },
      });
      console.log(`Permiso creado: ${nombre}`);
    } else {
      console.log(`Permiso existente: ${nombre}`);
    }
    permisosIds.push(permiso.id);
  }

  // Buscar o crear rol administrador
  let rolAdmin = await prisma.rol.findUnique({ where: { nombre: "administrador" } });
  if (!rolAdmin) {
    rolAdmin = await prisma.rol.create({
      data: {
        id: randomUUID(),
        nombre: "administrador",
        descripcion: "Admin",
        activo: true,
      },
    });
    console.log("Rol administrador creado");
  } else {
    console.log("Rol administrador existente");
  }

  // Vincular permisos nuevos al rol administrador (sin borrar los existentes)
  // Primero buscar permisos ya asociados:
  const rolPermisosExistentes = await prisma.rolPermiso.findMany({
    where: { rolId: rolAdmin.id },
  });
  const permisosExistentesIds = new Set(rolPermisosExistentes.map(rp => rp.permisoId));

  for (const permisoId of permisosIds) {
    if (!permisosExistentesIds.has(permisoId)) {
      await prisma.rolPermiso.create({
        data: {
          id: randomUUID(),
          rolId: rolAdmin.id,
          permisoId,
        },
      });
      console.log(`Permiso ${permisoId} vinculado a rol administrador`);
    }
  }

  // Crear usuario admin si no existe
  const adminUser = await prisma.usuario.findUnique({
    where: { email: "erickjosepineda33@gmail.com" },
  });
  if (!adminUser) {
    await prisma.usuario.create({
      data: {
        id: randomUUID(),
        nombre: "erick.reyes",
        email: "erickjosepineda33@gmail.com",
        password: await bcrypt.hash("erick.reyes", 10),
        activo: true,
        rolId: rolAdmin.id,
        debeCambiar: true,
      },
    });
    console.log("Usuario administrador creado");
  } else {
    console.log("Usuario administrador existente");
  }

  /*
  // Crear cliente de prueba
  // const cliente = await prisma.cliente.create({
  //   data: {
  //     id: randomUUID(),
  //     nombre: "Cliente de Prueba",
  //     email: "cliente.test@example.com",
  //     telefono: "9999-9999"
  //   }
  // });

  // Crear usuarios fotógrafos
  // const [fot1User, fot2User] = await Promise.all([
  //   prisma.usuario.create({
  //     data: {
  //       id: randomUUID(),
  //       nombre: "Ana Gómez",
  //       email: "ana.gomez@example.com",
  //       password: await bcrypt.hash("pass1234", 10),
  //       activo: true,
  //       rolId: rolAdmin.id,
  //       debeCambiar: false
  //     }
  //   }),
  //   prisma.usuario.create({
  //     data: {
  //       id: randomUUID(),
  //       nombre: "Luis Pérez",
  //       email: "luis.perez@example.com",
  //       password: await bcrypt.hash("pass1234", 10),
  //       activo: true,
  //       rolId: rolAdmin.id,
  //       debeCambiar: false
  //     }
  //   }),
  // ]);

  // const fotografo1 = await prisma.fotografo.create({ data: { Foto: "placeholder.svg", id: randomUUID(), usuarioId: fot1User.id, disponible: true, url: "prueba.com", bio: "El mas mamalon", nombre: "Alexis Reyes", telefono: "99889988" } });
  // const fotografo2 = await prisma.fotografo.create({ data: { Foto: "placeholder.svg", id: randomUUID(), usuarioId: fot2User.id, disponible: true, url: "Prueba.com", bio: "El mas reciooo", nombre: "Mafafa", telefono: "99889988" } });

  // Crear reservas asociadas al cliente
  // const dates = [
  //   new Date('2025-05-17T09:00:00Z'),
  //   new Date('2025-05-17T10:00:00Z'),
  //   new Date('2025-05-18T11:00:00Z'),
  //   new Date('2025-05-19T08:00:00Z'),
  //   new Date('2025-05-19T09:00:00Z')
  // ];
  // const fotografoIds = [fotografo1.id, fotografo2.id, fotografo1.id, fotografo2.id, fotografo1.id];

  // for (let i = 0; i < dates.length; i++) {
  //   await prisma.reserva.create({
  //     data: {
  //       id: randomUUID(),
  //       clienteId: cliente.id,
  //       fotografoId: fotografoIds[i],
  //       fecha: dates[i],
  //       horaInicio: dates[i],
  //       horaFin: addHours(dates[i], 1),
  //       estado: true
  //     }
  //   });
  // }
  */

  console.log("Seed completado exitosamente.");
  await prisma.$disconnect();
}

main().catch(e => {
  console.error("❌ Error en el seed:", e);
  prisma.$disconnect();
  process.exit(1);
});
