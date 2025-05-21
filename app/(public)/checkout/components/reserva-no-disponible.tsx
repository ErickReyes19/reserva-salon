import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, ArrowLeft } from 'lucide-react'

interface SlotUnavailableProps {
  date: string
  hour: string
  fotografo: string
  onBack: () => void
}

export function SlotUnavailable({ date, hour, fotografo, onBack }: SlotUnavailableProps) {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-0 shadow-lg">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Horario No Disponible</h2>
          <AlertCircle className="h-7 w-7" />
        </div>
        <p className="text-red-100 text-sm">El horario seleccionado ya no está disponible</p>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="rounded-full bg-red-100 p-3 mb-4">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
          <h3 className="text-xl font-medium mb-4 text-center">Lo sentimos, este horario ya está reservado</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 w-full mb-6">
            <div className="flex items-center mb-2">
              <Calendar className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-gray-700">{date}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-gray-700">{hour}:00 hrs con {fotografo}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-center">
            Por favor, selecciona otro horario o fecha para tu sesión fotográfica.
          </p>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t">
        <div className="w-full flex justify-center">
          <Button onClick={onBack} className="bg-red-600 hover:bg-red-700 gap-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver a seleccionar horario
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
