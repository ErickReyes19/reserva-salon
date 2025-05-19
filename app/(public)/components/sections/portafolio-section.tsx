
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import AnimatedSection from "../animated-section"

export default function PortfolioSection() {
  return (
    <AnimatedSection className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-800/50 text-purple-200 hover:bg-purple-800/50 border-purple-700">
            Portafolio
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-6">Nuestros Mejores Trabajos</h2>
          <p className="text-gray-300">
            Explora nuestra colección de fotografías destacadas que muestran nuestro estilo y calidad.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="relative h-80 overflow-hidden rounded-xl">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=Foto ${item}`}
                      alt={`Portfolio item ${item}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-bold">Proyecto {item}</h3>
                        <p className="text-sm text-gray-200">Categoría de fotografía</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mr-2 bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="static ml-2 bg-white/10 hover:bg-white/20 border-none text-white" />
          </div>
        </Carousel>
      </div>
    </AnimatedSection>
  )
}
