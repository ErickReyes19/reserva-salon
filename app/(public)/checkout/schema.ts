// app/(public)/checkout/schema.ts
import { z } from "zod";

export const CheckoutSchema = z.object({
  cardNumber: z.string().min(16),
  cvv: z.string().min(3),
  expiryMonth: z.string().min(1),
  expiryYear: z.string().min(4),
});

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;