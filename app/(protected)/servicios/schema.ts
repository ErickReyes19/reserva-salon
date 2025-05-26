import { z } from "zod";

export const PhotoServiceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "El nombre es requerido"),
  img: z.string().min(1, "La imagen es requerida"),
  description: z.string().min(1, "La descripción es requerida"),
  precio: z
    .number({ invalid_type_error: "El precio debe ser un número" })
    .min(0, "El precio debe ser mayor o igual a 0"),
  activo: z.boolean().optional(),
  categoryId: z.string().min(1, "La categoría es requerida"),

  categoriaNombre: z.string().optional(),

  // Fotógrafos opcionales al crear el servicio
  fotografos: z.array(z.string()).optional(),
});

export type PhotoService = z.infer<typeof PhotoServiceSchema>;
