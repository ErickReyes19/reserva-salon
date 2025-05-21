import * as z from 'zod';

export const ClienteSchema = z.object({
  id: z.string().optional(),
  nombre: z.string().min(1, "El nombre es requerido"),
  email: z.string().email().min(1, "El email es requerido"),
  telefono: z.string().min(1, "El telefono es requerido"),
});

export type Cliente = z.infer<typeof ClienteSchema>;

