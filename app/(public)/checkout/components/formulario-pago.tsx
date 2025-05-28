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
      // 1) Simula el pago
      const paymentSuccess = true
      if (!paymentSuccess) {
        alert("Error en el pago. Intenta de nuevo.")
        return
      }

      // 2) Crea el cliente
      const cliente = await postCliente({
        cliente: { nombre, email, telefono },
      })
      if (!cliente) throw new Error("No se pudo crear el cliente")

      // 3) Prepara fecha-hora UTC
      const year   = fecha.getUTCFullYear()
      const month  = fecha.getUTCMonth()   // 0 = enero
      const day    = fecha.getUTCDate()
      const horaInicio = new Date(Date.UTC(year, month, day, hora, 0, 0))

      // 4) Crea reserva + envía emails al cliente y fotógrafo
      await createReservaAndNotify({
        reservaData: {
          fecha,               // si guardas fecha “suave” sin hora
          horaInicio,          // Date UTC exacto
          fotografoId,
          clienteId: cliente.id!,
          photoServiceId: serviceId,
          precio: price,
        },
        // datos de destinatarios:
        clienteEmail: email,
        clienteNombre: nombre,
        fotografoEmail: fotografoEmail,   // <— necesitas añadirlo al store o fetch previo
        fotografoNombre: photographerName,
        serviceName,                         // si lo tienes en props/store
      })

      // 5) Avanza al paso de confirmación
      onNext()
    } catch (err: any) {
      console.error(err)
      alert(err.message || "Error inesperado")
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
