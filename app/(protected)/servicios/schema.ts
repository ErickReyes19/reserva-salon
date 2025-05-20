import { z } from "zod";

export const PhotoServiceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "El nombre es requerido"),
  img: z.string().min(1, "La imagen es requerida"),
  description: z.string().min(1, "La descripción es requerida"),
  activo: z.boolean().optional(),
  categoryId: z.string().min(1, "La categoría es requerida"),

  categoriaNombre: z.string().optional(),
});

export type PhotoService = z.infer<typeof PhotoServiceSchema>;
