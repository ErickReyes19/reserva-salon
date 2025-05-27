"use client"

import type { PhotoService } from "../../types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ServiceCarouselProps {
  services: PhotoService[]
}

export default function ServiceCarousel({ services }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 1

  const formatPrice = (precio: number) => {
    return new Intl.NumberFormat("es-HN", {
      style: "currency",
      currency: "HNL",
      minimumFractionDigits: 2,
    }).format(precio)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay servicios disponibles</p>
      </div>
    )
  }

  return (
    <div className="relative mb-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {services.map((service) => (
            <div key={service.id} className="w-full flex-shrink-0 px-4">
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.img || "/placeholder.svg?height=300&width=400"}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">{service.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mt-2 line-clamp-2">{service.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">{formatPrice(service.precio)}</div>
                      {service.fotografos && service.fotografos.length > 0 && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="truncate">{service.fotografos.join(", ")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {services.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      <div className="flex justify-center mt-4 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
