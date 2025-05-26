import type { PhotoService } from "../../types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import Image from "next/image"

interface ServiceGridProps {
  services: PhotoService[]
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const formatPrice = (precio: number) => {
    return new Intl.NumberFormat("es-HN", {
      style: "currency",
      currency: "HNL",
      minimumFractionDigits: 2,
    }).format(precio)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
      {services.map((service) => (
        <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.img || "/placeholder.svg?height=300&width=400"}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">{service.category}</Badge>
          </div>

          <CardContent className="p-6 ">
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
      ))}
    </div>
  )
}
