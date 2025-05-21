"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, ArrowLeft } from "lucide-react"

interface PaymentFormProps {
  onNext: () => void
  onPrev: () => void
}

export function PaymentForm({ onNext, onPrev }: PaymentFormProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Paso 2: Información de pago
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Número de tarjeta" />
        <div className="flex space-x-2">
          <Input placeholder="MM/YY" className="flex-1" />
          <Input placeholder="CVV" className="w-24" />
        </div>
        <Input placeholder="Nombre en la tarjeta" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onPrev} className="gap-1">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Atrás
        </Button>
        <Button onClick={onNext}>Pagar</Button>
      </CardFooter>
    </Card>
  )
}
