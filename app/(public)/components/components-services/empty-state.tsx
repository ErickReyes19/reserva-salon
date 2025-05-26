"use client"

import { Camera, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  title: string
  description: string
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Camera className="w-12 h-12 text-gray-400" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <Search className="w-4 h-4 text-blue-500" />
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 mb-6 max-w-md text-sm sm:text-base">{description}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
          onClick={() => {
            // Cambiar a la pestaña "Todos"
            const allTab = document.querySelector('[value="all"]') as HTMLElement
            allTab?.click()
          }}
        >
          Ver todos los servicios
        </Button>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contactar para consultas</Button>
      </div>
    </div>
  )
}
