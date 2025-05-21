"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export function LoadingState() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-0 shadow-lg">
      <CardContent className="p-12 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
        <h3 className="text-xl font-medium mb-2 text-center">Verificando disponibilidad</h3>
        <p className="text-gray-500 text-center">Estamos comprobando si el horario seleccionado está disponible...</p>
      </CardContent>
    </Card>
  )
}
