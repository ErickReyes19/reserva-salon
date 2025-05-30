import { z } from "zod";

export const FotografoSchema = z.object({
  id: z.string().optional(),
  Foto: z.string().min(1, "La imagen es requerida"),
  bio: z.string().min(1, "La biografia es requerida"),
  nombre: z.string().min(1, "El nombre es requerido"),
  url: z.string().min(1, "La url es requerida"),
  telefono: z.string().min(1, "El telfono es requerida"),
  disponible: z.boolean().optional(),
  usuarioId: z.string().min(1, "La categoría es requerida"),

  email: z.string().optional(),
  usuarioNombre: z.string().optional(),
});

export type Fotografo = z.infer<typeof FotografoSchema>;

