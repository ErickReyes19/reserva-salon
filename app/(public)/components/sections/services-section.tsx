// components/sections/services-section.tsx

import AnimatedSection from "../animated-section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import AnimatedCard from "../animated-card";
import ServiceGrid from "../components-services/service-grid";
import ServiceCarousel from "../components-services/service-carousel";
import { CategoryWithServices, PhotoService } from "../../types";

export default function ServicesSection({ categories }: { categories: CategoryWithServices[] }) {
  const allServices: PhotoService[] = categories.flatMap((cat) => cat.services);

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
            <ServiceCarousel services={allServices} />
            <ServiceGrid services={allServices} />
          </TabsContent>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.name}>
              <ServiceCarousel services={cat.services} />
              <ServiceGrid services={cat.services} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AnimatedSection>
  );
}
