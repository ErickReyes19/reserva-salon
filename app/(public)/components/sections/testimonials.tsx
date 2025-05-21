/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import AnimatedSection from "../animated-section"

export default function TestimonialsSection() {
  function getInitials(name: string) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "";
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }

  const testimonials = [
    {
      name: "María González",
      role: "Cliente Frecuente",
      quote:
        "Las fotografías que me tomaron para mi book profesional superaron todas mis expectativas. ¡Increíble trabajo!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Juan Pérez",
      role: "Recién Casado",
      quote:
        "Contratamos sus servicios para nuestra boda y fue la mejor decisión. Capturaron cada momento especial exactamente como lo queríamos.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Laura Ramírez",
      role: "Empresaria",
      quote:
        "Las fotos de producto que realizaron para mi tienda online aumentaron mis ventas significativamente. Profesionales y creativos.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Carlos Mendez",
      role: "Modelo",
      quote:
        "Mi portafolio quedó espectacular. La calidad y creatividad de las fotos me han ayudado a conseguir importantes contratos.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <AnimatedSection className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Testimonios</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600">
            Descubre por qué nuestros clientes confían en nosotros para capturar sus momentos más importantes.
          </p>
        </div>

        <Carousel className="w-full" opts={{
          loop: true,
        }}>
          <CarouselContent>

            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="border-none shadow-md h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-purple-200 bg-purple-100 text-purple-800">
                          <AvatarFallback>
                            {getInitials(testimonial.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mr-2" />
            <CarouselNext className="static ml-2" />
          </div>
        </Carousel>
      </div>
    </AnimatedSection>
  )
}
