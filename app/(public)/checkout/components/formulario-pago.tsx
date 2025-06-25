"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, ArrowLeft } from "lucide-react"
import { postCliente } from "@/app/(protected)/clientes/actions"
import { createReserva } from "@/app/(protected)/reservas/actions"
import { createReservaAndNotify } from "@/app/(protected)/reservas/orchestrator"
import { toast } from "sonner";

const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(12, "Debe tener al menos 12 dígitos")
    .max(19, "No más de 19 dígitos")
    .regex(/^\d+$/, "Solo números"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato MM/YY"),
  cvv: z
    .string()

    .min(3, "Al menos 3 dígitos")
    .max(4, "Máximo 4 dígitos")
    .regex(/^\d+$/, "Solo números"),
  cardName: z.string().min(1, "Obligatorio"),
})

type PaymentFormData = z.infer<typeof paymentSchema>

interface PaymentFormProps {
  onNext: () => void
  onPrev: () => void
  // Props heredadas desde el padre para crear cliente y reserva:
  nombre: string
  email: string
  telefono: string
  serviceId: string
  serviceName: string
  photographerName: string
  fotografoEmail: string
  price: number
  fecha: Date
  hora: number
  fotografoId: string
}

export function PaymentForm({
  onNext,
  onPrev,
  nombre,
  email,
  telefono,
  fecha,
  serviceId,
  serviceName,
  photographerName,
  fotografoEmail,
  price,
  hora,
  fotografoId,
}: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  })

  const onSubmit = async (data: PaymentFormData) => {
    try {

      const paymentSuccess = true
      if (!paymentSuccess) {
      toast.error("Error en el pago. Intenta de nuevo.")
      return
      }

      const cliente = await postCliente({
      cliente: { nombre, email, telefono },
      })
      if (!cliente) {
      toast.error("Hubo un error al crear la reserva: El cliente ya existe.")
      return 
      }

      const year = fecha.getUTCFullYear()
      const month = fecha.getUTCMonth()
      const day = fecha.getUTCDate()
      const horaInicio = new Date(Date.UTC(year, month, day, hora, 0, 0))

      const { reserva, emailEnviado } = await createReservaAndNotify({
      reservaData: {
        fecha,
        horaInicio,
        fotografoId,
        clienteId: cliente.id!,
        photoServiceId: serviceId,
        precio: price,
      },
      clienteEmail: email,
      clienteNombre: nombre,
      fotografoEmail: fotografoEmail,
      fotografoNombre: photographerName,
      serviceName,
      })

      if (!emailEnviado) {
      toast.warning("La reserva fue creada exitosamente, pero hubo un error al enviar el correo.")
      }
      toast.success("Reserva creada exitosamente. se envió un correo a :" + email + " con los detalles de la reserva.")

      onNext()
    } catch (err) {
      console.error(err instanceof Error ? err.message : String(err))
      toast.error(`Hubo un error al crear la reserva: ${err instanceof Error ? err.message : String(err)}`)
    }
  }


  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Paso 2: Información de pago
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div>
            <Input
              {...register("cardNumber")}
              placeholder="Número de tarjeta"
            />
            {errors.cardNumber && (
              <p className="text-sm text-red-600">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="flex space-x-2">
            <div className="flex-1">
              <Input
                {...register("expiryDate")}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiryDate && (
                <p className="text-sm text-red-600">
                  {errors.expiryDate.message}
                </p>
              )}
            </div>
            <div className="w-24">
              <Input
                {...register("cvv")}
                placeholder="CVV"
                maxLength={4}
              />
              {errors.cvv && (
                <p className="text-sm text-red-600">{errors.cvv.message}</p>
              )}
            </div>
          </div>

          <div>
            <Input
              {...register("cardName")}
              placeholder="Nombre en la tarjeta"
            />
            {errors.cardName && (
              <p className="text-sm text-red-600">
                {errors.cardName.message}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            className="gap-1"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Atrás
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Procesando..." : "Pagar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
