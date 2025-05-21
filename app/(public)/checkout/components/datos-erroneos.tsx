"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft } from "lucide-react"

interface InvalidParametersProps {
  missingParams: string[]
  onBack: () => void
}

export function InvalidParameters({ missingParams, onBack }: InvalidParametersProps) {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-0 shadow-lg">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Parámetros Inválidos</h2>
          <AlertTriangle className="h-7 w-7" />
        </div>
        <p className="text-amber-100 text-sm">No se puede procesar la reserva con información incompleta</p>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="rounded-full bg-amber-100 p-3 mb-4">
            <AlertTriangle className="h-12 w-12 text-amber-600" />
          </div>
          <h3 className="text-xl font-medium mb-4 text-center">Información incompleta</h3>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 w-full mb-6">
            <p className="text-gray-700 mb-2">Faltan los siguientes datos requeridos:</p>
            <ul className="list-disc pl-5 text-amber-700">
              {missingParams.map((param) => (
                <li key={param}>{param}</li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 text-center">
            Por favor, vuelve a la página anterior y completa todos los campos requeridos.
          </p>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t">
        <div className="w-full flex justify-center">
          <Button onClick={onBack} className="bg-amber-600 hover:bg-amber-700 gap-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
