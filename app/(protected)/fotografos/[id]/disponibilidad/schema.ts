// schema.ts
import { z } from "zod";

export const UnavailabilitySchema = z
  .object({
    id:           z.string().uuid().optional(),
    fotografoId:  z.string().uuid().optional(),
    recurring:    z.boolean(),
    weekday: z
      .number()
      .int()
      .min(0, "El día debe ser entre 0 (domingo) y 6 (sábado)")
      .max(6, "El día debe ser entre 0 (domingo) y 6 (sábado)")
      .optional(),
    // validamos que sea cualquier string que Date.parse() acepte
    startDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Fecha de inicio inválida",
      })
      .optional(),
    endDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Fecha de fin inválida",
      })
      .optional(),
    activo: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.recurring) {
      if (data.weekday == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["weekday"],
          message: "Debes proporcionar 'weekday' cuando recurring = true",
        });
      }
    } else {
      if (!data.startDate || !data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["startDate"],
          message:
            "Debes proporcionar 'startDate' y 'endDate' cuando recurring = false",
        });
        return;
      }
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
  });

export type Unavailability = z.infer<typeof UnavailabilitySchema>;
