import { PrismaClient } from "../app/generated/prisma";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

const globalForPrisma = globalThis as typeof globalThis & { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();


async function main() {
  console.log("🔌 Conectando a la base de datos...");
  const permisoNames = [
    "ver_permisos", "ver_roles", "crear_roles", "editar_roles",
    "ver_usuarios", "crear_usuario", "editar_usuario"
  ];

  // Seed Permisos
  const permisos = await Promise.all(
    permisoNames.map((nombre) =>
      prisma.permiso.upsert({
        where: { nombre },
        update: {},
        create: { id: randomUUID(), nombre, descripcion: `Permite ${nombre.replace(/_/g, " ")}`, activo: true }
      })
    )
  );
  console.log("✅ Permisos seed completado");

  // Seed Rol Admin
  const rolAdmin = await prisma.rol.upsert({
    where: { nombre: "administrador" },
    update: {},
    create: {
      id: randomUUID(), nombre: "administrador",
      descripcion: "Rol con todos los permisos de administración", activo: true,
      permisos: { create: permisos.map(p => ({ id: randomUUID(), permiso: { connect: { id: p.id } } })) }
    }
  });
  console.log("✅ Rol administrador seed completado");

  // Seed Usuario Admin
  const email = "erickjosepineda33@gmail.com";
  const hashedPassword = await bcrypt.hash("erick.reyes", 10);
  await prisma.usuario.upsert({
    where: { email },
    update: {},
    create: {
      id: randomUUID(), nombre: "erick.reyes", email,
      password: hashedPassword, activo: true,
      rolId: rolAdmin.id, DebeCambiar: true
    }
  });
  console.log("✅ Usuario administrador seed completado");

  console.log("🎉 Seed completado exitosamente.");
}

main()
  .catch(e => console.error(e))
  .finally(async () => { await prisma.$disconnect(); console.log("🔌 Desconectado de la base de datos."); });
