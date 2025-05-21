import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "../animated-section";
import AnimatedCard from "../animated-card";
import { getFotografos } from "@/app/(protected)/fotografos/actions";
import type { Fotografo } from "@/app/(protected)/fotografos/type";
import PhotoCard from "../photo-card";

export default async function PhotographersSection() {
  const fotografos = await getFotografos();

  return (
    <AnimatedSection id="photographers" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors px-4 py-1.5 text-sm font-medium rounded-full">
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent pb-2 bg-gradient-to-r from-purple-700 to-pink-600 mb-6">
            Fotógrafos Profesionales
          </h2>
          <p className="text-gray-600 text-lg">
            Nuestro talentoso equipo de fotógrafos combina experiencia, creatividad y pasión para capturar momentos únicos desde perspectivas extraordinarias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {fotografos.map((photographer, index) => (
            <AnimatedCard key={photographer.id} delay={index}>
              <PhotoCard fotografo={photographer} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
