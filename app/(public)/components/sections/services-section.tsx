"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image"
import AnimatedCard from "../animated-card"
import AnimatedSection from "../animated-section"
import { CategoryWithServices, PhotoService } from "../../types"
import { getCategoriesWithServices } from "../../actions"

export default function ServicesSection() {
  const [categories, setCategories] = useState<CategoryWithServices[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCategoriesWithServices()
      .then((data) => setCategories(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <AnimatedSection id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
        </div>
      </AnimatedSection>
    )
  }

  // Todos los servicios juntos
  const allServices: PhotoService[] = categories.flatMap((cat) => cat.services)

  const ServiceGrid = ({ services }: { services: PhotoService[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((svc, i) => (
        <AnimatedCard key={svc.id} delay={i}>
          <div className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={svc.img}
                alt={svc.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 flex-1">
              <h3 className="text-lg font-semibold mb-2">{svc.name}</h3>
              <p className="text-gray-600 line-clamp-3">{svc.description}</p>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  )

  return (
    <AnimatedSection id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Nuestros Servicios Fotográficos
        </h2>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-4">
            <TabsTrigger value="all">Todos</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.name}>
                {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <ServiceGrid services={allServices} />
          </TabsContent>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.name}>
              <ServiceGrid services={cat.services} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AnimatedSection>
  )
}
