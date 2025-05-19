import * as z from 'zod';

export const CategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "El nombre es requerido"),
  activo: z.boolean().optional(),
});

export type Category = z.infer<typeof CategorySchema>;

export const PhotoServiceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "El nombre es requerido"),
  img: z.string().min(1, "La imagen es requerida"), // URL o filename
  description: z.string().min(1, "La descripción es requerida"),
  activo: z.boolean().optional(),
  categoryId: z.string().min(1, "La categoría es requerida"),
});

export type PhotoService = z.infer<typeof PhotoServiceSchema>;