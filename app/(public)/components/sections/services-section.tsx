import AnimatedSection from "../animated-section"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ServiceGrid from "../components-services/service-grid"
import ServiceCarousel from "../components-services/service-carousel"
import EmptyState from "../components-services/empty-state"
import type { CategoryWithServices, PhotoService } from "../../types"

export default function ServicesSection({ categories }: { categories: CategoryWithServices[] }) {
  const allServices: PhotoService[] = categories.flatMap((cat) => cat.services)
  console.log("🚀 ~ ServicesSection ~ allServices:", allServices)

  return (
    <AnimatedSection id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios Fotográficos</h2>

        <Tabs defaultValue="all" className="mb-8 sm:mb-12">
          <TabsList className="grid w-full grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-1 sm:gap-2 mb-6 h-auto p-1 bg-gray-100 rounded-lg">
            <TabsTrigger
              value="all"
              className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600"
            >
              Todos
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.name}
                className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 text-center"
              >
                {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            {allServices.length === 0 ? (
              <EmptyState
                title="No hay servicios disponibles"
                description="Actualmente no tenemos servicios fotográficos disponibles. Vuelve pronto para ver nuestras ofertas."
              />
            ) : (
              <>
                <div className="block md:hidden">
                  <ServiceCarousel services={allServices} />
                </div>
                <div className="hidden md:block">
                  <ServiceGrid services={allServices} />
                </div>
              </>
            )}
          </TabsContent>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.name}>
              {cat.services.length === 0 ? (
                <EmptyState
                  title={`No hay servicios en ${cat.name}`}
                  description={`Actualmente no tenemos servicios disponibles en la categoría ${cat.name}. Explora otras categorías o vuelve pronto.`}
                />
              ) : (
                <>
                  <div className="block md:hidden">
                    <ServiceCarousel services={cat.services} />
                  </div>
                  <div className="hidden md:block">
                    <ServiceGrid services={cat.services} />
                  </div>
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AnimatedSection>
  )
}
