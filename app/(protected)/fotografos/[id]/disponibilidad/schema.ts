// schema.ts

import { z } from "zod";

export const UnavailabilitySchema = z
  .object({
    id: z.string().uuid().optional(),
    fotografoId: z.string().uuid().optional(),
    recurring: z.boolean(),
    weekday: z
      .number()
      .int()
      .min(0, "El día debe ser entre 0 (domingo) y 6 (sábado)")
      .max(6, "El día debe ser entre 0 (domingo) y 6 (sábado)")
      .optional(),
    startDate: z.string().datetime({ offset: true }).optional(),
    endDate: z.string().datetime({ offset: true }).optional(),

    startTime: z
      .string()
      .min(1, "La hora de inicio es requerida")
      .optional()
      .describe("HH:mm; solo si recurring = false"),
    endTime: z
      .string()
      .min(1, "La hora de fin es requerida")
      .optional()
      .describe("HH:mm; solo si recurring = false"),
    activo: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // Regla semanal
    if (data.recurring) {
      if (data.weekday == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["weekday"],
          message: "Debes proporcionar 'weekday' cuando recurring = true",
        });
      }
      // No exigimos fechas ni horas
    } else {
      // Bloqueo puntual requiere fechas...
      if (!data.startDate || !data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["startDate"],
          message: "Debes proporcionar 'startDate' y 'endDate' cuando recurring = false",
        });
      }
      // ...y horas
      if (!data.startTime || !data.endTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["startTime"],
          message: "Debes proporcionar 'startTime' y 'endTime' cuando recurring = false",
        });
      }
      // Orden de fechas
      if (data.startDate && data.endDate) {
        const sd = new Date(data.startDate);
        const ed = new Date(data.endDate);
        if (sd > ed) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["endDate"],
            message: "'endDate' debe ser igual o posterior a 'startDate'",
          });
        }
      }
      // Orden de horas (opcional)
      if (data.startTime && data.endTime) {
        const [h1, m1] = data.startTime.split(":").map(Number);
        const [h2, m2] = data.endTime.split(":").map(Number);
        if (h1 > h2 || (h1 === h2 && m1 >= m2)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["endTime"],
            message: "'endTime' debe ser posterior a 'startTime'",
          });
        }
      }
    }
  });

export type Unavailability = z.infer<typeof UnavailabilitySchema>;
