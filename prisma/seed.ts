import { PrismaClient } from "../app/generated/prisma";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { addHours } from "date-fns";

const globalForPrisma = globalThis as typeof globalThis & { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

async function main() {
  console.log("🔌 Conectando a la base de datos...");

  // Limpiar datos de pruebas (excepto permisos/roles/usuarios admin existentes)
  await prisma.reserva.deleteMany({});
  await prisma.fotografo.deleteMany({});
  await prisma.usuario.deleteMany({ where: { email: { in: ["ana.gomez@example.com", "luis.perez@example.com"] } } });
  await prisma.cliente.deleteMany({ where: { email: "cliente.test@example.com" } });

  // Crear permisos y rol admin si no existen
  const existingRolAdmin = await prisma.rol.findUnique({ where: { nombre: "administrador" } });

  let rolAdmin;
  if (!existingRolAdmin) {
    const permisoNames = [
      "ver_permisos", "ver_roles", "crear_roles", "editar_roles",
      "ver_usuarios", "crear_usuario", "editar_usuario"
    ];

    const permisos = await Promise.all(
      permisoNames.map(nombre => prisma.permiso.create({
        data: { id: randomUUID(), nombre, descripcion: `Permite ${nombre.replace(/_/g, " ")}`, activo: true }
      }))
    );

    rolAdmin = await prisma.rol.create({
      data: {
        id: randomUUID(),
        nombre: "administrador",
        descripcion: "Admin",
        activo: true,
        permisos: { create: permisos.map(p => ({ id: randomUUID(), permisoId: p.id })) }
      }
    });

    // Crear usuario admin
    await prisma.usuario.create({
      data: {
        id: randomUUID(),
        nombre: "Erick Reyes",
        email: "erickjosepineda33@gmail.com",
        password: await bcrypt.hash("erick.reyes", 10),
        activo: true,
        rolId: rolAdmin.id,
        debeCambiar: true
      }
    });
  } else {
    rolAdmin = existingRolAdmin;
  }

  // Crear cliente de prueba
  const cliente = await prisma.cliente.create({
    data: {
      id: randomUUID(),
      nombre: "Cliente de Prueba",
      email: "cliente.test@example.com",
      telefono: "9999-9999"
    }
  });

  // Crear usuarios fotógrafos
  const [fot1User, fot2User] = await Promise.all([
    prisma.usuario.create({
      data: {
        id: randomUUID(),
        nombre: "Ana Gómez",
        email: "ana.gomez@example.com",
        password: await bcrypt.hash("pass1234", 10),
        activo: true,
        rolId: rolAdmin.id,
        debeCambiar: false
      }
    }),
    prisma.usuario.create({
      data: {
        id: randomUUID(),
        nombre: "Luis Pérez",
        email: "luis.perez@example.com",
        password: await bcrypt.hash("pass1234", 10),
        activo: true,
        rolId: rolAdmin.id,
        debeCambiar: false
      }
    }),
  ]);

  const fotografo1 = await prisma.fotografo.create({ data: { id: randomUUID(), usuarioId: fot1User.id } });
  const fotografo2 = await prisma.fotografo.create({ data: { id: randomUUID(), usuarioId: fot2User.id } });

  // Crear reservas asociadas al cliente
  const dates = [
    new Date('2025-05-17T09:00:00Z'),
    new Date('2025-05-17T10:00:00Z'),
    new Date('2025-05-18T11:00:00Z'),
    new Date('2025-05-19T08:00:00Z'),
    new Date('2025-05-19T09:00:00Z')
  ];
  const fotografoIds = [fotografo1.id, fotografo2.id, fotografo1.id, fotografo2.id, fotografo1.id];

  for (let i = 0; i < dates.length; i++) {
    await prisma.reserva.create({
      data: {
        id: randomUUID(),
        clienteId: cliente.id,
        fotografoId: fotografoIds[i],
        fecha: dates[i],
        horaInicio: dates[i],
        horaFin: addHours(dates[i], 1),
        pixelpayOrder: randomUUID(),
        estado: true
      }
    });
  }


  // ——————————————
// NUEVO: SEED DE CATEGORÍAS Y SERVICIOS (Categorías en español)
// ——————————————
const categoryNames = ["retratos", "eventos", "comercial", "paisajes"];
const categories = await Promise.all(
  categoryNames.map((name) =>
    prisma.category.upsert({
      where: { name },
      update: {},
      create: { id: randomUUID(), name },
    })
  )
);

// Servicios de ejemplo por categoría
const servicesData = [
  // retratos
  {
    category: categories.find(c => c.name === "retratos")!,
    items: [
      {
        name: "Retrato de Estudio",
        price: "120",
        img: "studio_portrait.jpg",
        description: "Sesión en estudio con iluminación profesional.",
        featured: true,
        duration: "1 hora",
        location: "Estudio Central"
      },
      {
        name: "Retrato al Aire Libre",
        price: "100",
        img: "outdoor_portrait.jpg",
        description: "Sesión en parque o jardín.",
        featured: false,
        duration: "1.5 horas",
        location: "Parque Central"
      }
    ]
  },
  // eventos
  {
    category: categories.find(c => c.name === "eventos")!,
    items: [
      {
        name: "Cobertura Evento Pequeño",
        price: "200",
        img: "small_event.jpg",
        description: "Hasta 2 horas de cobertura.",
        featured: false,
        duration: "2 horas",
        location: "Lugar a convenir"
      },
      {
        name: "Cobertura Evento Grande",
        price: "350",
        img: "large_event.jpg",
        description: "Cobertura completa del evento (hasta 5 horas).",
        featured: true,
        duration: "5 horas",
        location: "Lugar a convenir"
      }
    ]
  },
  // comercial
  {
    category: categories.find(c => c.name === "comercial")!,
    items: [
      {
        name: "Sesión Producto",
        price: "180",
        img: "product_shoot.jpg",
        description: "Fotografía de producto para e-commerce.",
        featured: false,
        duration: "2 horas",
        location: "Estudio o cliente"
      },
      {
        name: "Publicidad Exterior",
        price: "300",
        img: "ad_campaign.jpg",
        description: "Fotos para campaña publicitaria exterior.",
        featured: true,
        duration: "3 horas",
        location: "Ubicación exterior"
      }
    ]
  },
  // paisajes
  {
    category: categories.find(c => c.name === "paisajes")!,
    items: [
      {
        name: "Paisaje Urbano",
        price: "150",
        img: "urban_landscape.jpg",
        description: "Fotografía de arquitectura y calles.",
        featured: false,
        duration: "2 horas",
        location: "Centro de la ciudad"
      },
      {
        name: "Paisaje Natural",
        price: "170",
        img: "nature_landscape.jpg",
        description: "Fotografía en exteriores naturales.",
        featured: false,
        duration: "3 horas",
        location: "Parque Nacional"
      }
    ]
  }
];

// Crear PhotoService
for (const svcGroup of servicesData) {
  for (const svc of svcGroup.items) {
    await prisma.photoService.upsert({
      where: { name: svc.name },
      update: {},
      create: {
        id: randomUUID(),
        name: svc.name,
        price: svc.price,
        img: svc.img,
        description: svc.description,
        featured: svc.featured,
        duration: svc.duration,
        location: svc.location,
        categoryId: svcGroup.category.id
      }
    });
  }
}


  console.log("🎉 Seed completado exitosamente.");
  await prisma.$disconnect();
}

main().catch(e => {
  console.error("❌ Error en el seed:", e);
  prisma.$disconnect();
  process.exit(1);
});
