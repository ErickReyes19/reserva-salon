
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import AnimatedCard from "../animated-card"
import AnimatedSection from "../animated-section"

export default function ServicesSection() {
  const allServices = [
    {
      name: "Sesión de Retratos",
      price: "Desde $150",
      img: "/placeholder.svg?height=300&width=400",
      description: "Captura tu mejor versión con nuestras sesiones de retratos profesionales.",
      category: "portraits",
    },
    {
      name: "Fotografía de Bodas",
      price: "Desde $800",
      img: "/placeholder.svg?height=300&width=400",
      description: "Inmortalizamos cada momento especial de tu día más importante.",
      category: "events",
    },
    {
      name: "Sesiones de Moda",
      price: "Desde $200",
      img: "/placeholder.svg?height=300&width=400",
      description: "Perfectas para modelos o cualquier persona que quiera un book profesional.",
      category: "portraits",
    },
    {
      name: "Eventos Corporativos",
      price: "Desde $300",
      img: "/placeholder.svg?height=300&width=400",
      description: "Cobertura completa para tus eventos empresariales y conferencias.",
      category: "events",
    },
    {
      name: "Fotografía de Producto",
      price: "Desde $100",
      img: "/placeholder.svg?height=300&width=400",
      description: "Resalta tus productos con fotografías de alta calidad para tu negocio.",
      category: "commercial",
    },
    {
      name: "Sesiones Familiares",
      price: "Desde $180",
      img: "/placeholder.svg?height=300&width=400",
      description: "Captura momentos especiales con tus seres queridos en locaciones interiores o exteriores.",
      category: "portraits",
    },
  ]

  const portraitServices = allServices.filter((service) => service.category === "portraits")
  const eventServices = allServices.filter((service) => service.category === "events")
  const commercialServices = allServices.filter((service) => service.category === "commercial")

  const ServiceGrid = ({ services, columns = 3 }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
      {services.map((service, index) => (
        <AnimatedCard key={index} delay={index}>
          <Card className="overflow-hidden border-none shadow-lg h-full">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={service.img || "/placeholder.svg"}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes={`(max-width: 768px) 100vw, ${columns === 1 ? "100vw" : columns === 2 ? "50vw" : "33vw"}`}
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{service.name}</CardTitle>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  {service.price}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver detalles
              </Button>
            </CardFooter>
          </Card>
        </AnimatedCard>
      ))}
    </div>
  )

  return (
    <AnimatedSection id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Servicios</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios Fotográficos</h2>
          <p className="text-gray-600">
            Ofrecemos una amplia gama de servicios fotográficos profesionales para satisfacer todas tus necesidades.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="portraits">Retratos</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
            <TabsTrigger value="commercial">Comercial</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <ServiceGrid services={allServices} columns={3} />
          </TabsContent>

          <TabsContent value="portraits" className="mt-8">
            <ServiceGrid services={portraitServices} columns={3} />
          </TabsContent>

          <TabsContent value="events" className="mt-8">
            <ServiceGrid services={eventServices} columns={2} />
          </TabsContent>

          <TabsContent value="commercial" className="mt-8">
            <ServiceGrid services={commercialServices} columns={1} />
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedSection>
  )
}
