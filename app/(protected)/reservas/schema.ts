import { z } from "zod";

export const ReservaSchema = z.object({
  id: z.date().optional(),
  fecha: z.date({ required_error: "La fecha es requerida" }),
  horaInicio: z.date({ required_error: "La hora de inicio es requerida" }),
  horaFin: z.string().min(1, "La hora de fin es requerida"),
  fotografoId: z.string().min(1, "El fotógrafo es requerido"),
  clienteId: z.string().min(1, "El cliente es requerido"),
  estado: z.string().min(1, "El estado es requerido"),

  fotografoNombre: z.string().optional(),
  clienteNombre: z.string().optional(),
});

export type Reserva = z.infer<typeof ReservaSchema>;
