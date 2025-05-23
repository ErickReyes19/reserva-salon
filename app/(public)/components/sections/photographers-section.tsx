import { Badge } from "@/components/ui/badge"
import AnimatedSection from "../animated-section"
import AnimatedCard from "../animated-card"
import { getFotografos } from "@/app/(protected)/fotografos/actions"
import PhotoCard from "../photo-card"

export default async function PhotographersSection() {
  const fotografos = await getFotografos()

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
            Nuestro talentoso equipo de fotógrafos combina experiencia, creatividad y pasión para capturar momentos
            únicos desde perspectivas extraordinarias.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 md:overflow-visible md:grid md:grid-cols-3 md:gap-8 pb-4 md:pb-0">
          {fotografos.map((photographer, index) => (
            <div key={photographer.id} className="flex-shrink-0 w-80 md:w-auto">
              <AnimatedCard delay={index}>
                <PhotoCard fotografo={photographer} />
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
