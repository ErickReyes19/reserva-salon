
import { Badge } from "@/components/ui/badge"
import { Camera, Clock } from "lucide-react"
import Image from "next/image"
import AnimatedSection from "../animated-section"

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Interior del estudio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">10+</span>
              <span className="text-white text-xs ml-1">
                años de
                <br />
                experiencia
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Sobre Nosotros</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Creamos arte a través de la fotografía</h2>

            <div className="space-y-6 text-gray-600">
              <p>
                En <span className="font-semibold text-purple-700">FotoStudio</span>, nos apasiona capturar la esencia
                de cada momento. Desde 2010, hemos estado transformando instantes fugaces en recuerdos eternos a través
                de nuestro lente.
              </p>
              <p>
                Nuestro equipo de fotógrafos profesionales combina técnica, creatividad y pasión para crear imágenes que
                cuentan historias. Cada fotografía es una obra de arte única, diseñada para evocar emociones y preservar
                momentos especiales.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Camera size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Equipo Profesional</h3>
                    <p className="text-sm text-gray-500">Tecnología de última generación</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Entrega Rápida</h3>
                    <p className="text-sm text-gray-500">Resultados en tiempo récord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
