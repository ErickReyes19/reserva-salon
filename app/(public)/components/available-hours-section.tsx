"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatHour } from "@/lib/utils"

interface AvailableHoursSectionProps {
  selectedDate: Date
  availableHours: number[]
  onHourClick: (hour: number) => void
}

export default function AvailableHoursSection({
  selectedDate,
  availableHours,
  onHourClick,
}: AvailableHoursSectionProps) {
  return (
    <Card className="shadow-md border border-gray-200 rounded-xl h-full">
      <CardHeader className="bg-white border-b p-4">
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-indigo-600" />
          <CardTitle className="text-lg font-semibold text-gray-800">Horarios Disponibles</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 bg-white">
        <div className="bg-indigo-50 rounded-lg p-3 mb-4">
          <p className="text-sm font-medium text-indigo-800">
            {format(selectedDate, "EEEE, d 'de' MMMM", { locale: es })}
          </p>
        </div>

        {availableHours.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availableHours.map((h) => (
              <motion.button
                key={h}
                onClick={() => onHourClick(h)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center p-3 rounded-lg bg-white border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 hover:border-indigo-300 transition-all shadow-sm"
              >
                {formatHour(h)}
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 rounded-lg">
            <Clock className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-center text-gray-500 font-medium">Sin horarios disponibles</p>
            <p className="text-center text-gray-400 text-sm mt-1">Selecciona otra fecha</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
