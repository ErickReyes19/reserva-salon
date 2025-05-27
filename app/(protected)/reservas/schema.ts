import { z } from "zod";

export const ReservaSchema = z.object({
  id: z.string().uuid().optional(),
  fecha: z.date({ required_error: "La fecha es requerida" }),
  horaInicio: z.date({ required_error: "La hora de inicio es requerida" }),
  horaFin: z.date({ required_error: "La hora de fin es requerida" }),
  fotografoId: z.string().min(1, "El fotógrafo es requerido"),
  clienteId: z.string().min(1, "El cliente es requerido"),
  photoServiceId: z.string().optional(),
  estado: z.boolean(),
  precio: z.number().optional(),

  fotografoNombre: z.string().optional(),
  photoServiceNombre: z.string().optional(),
  clienteNombre: z.string().optional(),
  nombreSesion: z.string().optional(),
});


export type Reserva = z.infer<typeof ReservaSchema>;
