import { z } from "zod";

export const GaleriaSchema = z.object({
  id: z.string().optional(),
  nombreFoto: z.string().min(1, "El nombre de la foto es requerido"),
  url: z.string().min(1, "La url es requerida"),
  fotografoId: z.string().optional(),

  fotografoNombre: z.string().optional(), // útil para mostrar en UI si es necesario
});

export type Galeria = z.infer<typeof GaleriaSchema>;
