
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import Image from "next/image"
import AnimatedSection from "../animated-section"
import AnimatedCard from "../animated-card"

export default function PhotographersSection() {
  const photographers = [
    {
      name: "Carlos Mendoza",
      specialty: "Retratos y Bodas",
      img: "/placeholder.svg?height=400&width=400",
      bio: "Especialista en capturar la esencia y personalidad en cada retrato. Con más de 8 años de experiencia en fotografía de bodas.",
      instagram: "#",
    },
    {
      name: "Ana Martínez",
      specialty: "Moda y Belleza",
      img: "/placeholder.svg?height=400&width=400",
      bio: "Reconocida por su estilo único y visión creativa en el mundo de la moda. Ha trabajado con importantes marcas nacionales.",
      instagram: "#",
    },
    {
      name: "Roberto Sánchez",
      specialty: "Eventos y Paisajes",
      img: "/placeholder.svg?height=400&width=400",
      bio: "Maestro en capturar la magia de los eventos y la belleza de los paisajes. Su trabajo ha sido publicado en revistas especializadas.",
      instagram: "#",
    },
  ]

  return (
    <AnimatedSection id="photographers" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Nuestro Equipo</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Fotógrafos Profesionales</h2>
          <p className="text-gray-600">
            Nuestro talentoso equipo de fotógrafos combina experiencia, creatividad y pasión para capturar momentos
            únicos desde perspectivas extraordinarias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {photographers.map((photographer, index) => (
            <AnimatedCard key={index} delay={index}>
              <Card className="overflow-hidden border-none shadow-lg h-full">
                <div className="relative h-96 w-full group">
                  <Image
                    src={photographer.img || "/placeholder.svg"}
                    alt={photographer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm mb-2">{photographer.bio}</p>
                      <a
                        href={photographer.instagram}
                        className="inline-flex items-center text-purple-300 hover:text-purple-200"
                      >
                        <Instagram size={16} className="mr-1" /> @fotografo
                      </a>
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{photographer.name}</CardTitle>
                  <CardDescription className="text-purple-600">{photographer.specialty}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
