"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Instagram } from 'lucide-react'
import Image from "next/image"
import AnimatedSection from "../animated-section"
import AnimatedCard from "../animated-card"
import { getFotografos } from "@/app/(protected)/fotografos/actions"
import type { Fotografo } from "@/app/(protected)/fotografos/type"

export default function PhotographersSection() {
  const [fotografos, setFotografos] = useState<Fotografo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFotografos()
      .then((data) => setFotografos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <AnimatedSection id="photographers" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-t-4 border-purple-600 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-t-4 border-purple-400 animate-spin animation-delay-150"></div>
            </div>
            <p className="text-gray-500 font-medium">Cargando fotógrafos...</p>
          </div>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection id="photographers" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors px-4 py-1.5 text-sm font-medium rounded-full">
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600 mb-6">
            Fotógrafos Profesionales
          </h2>
          <p className="text-gray-600 text-lg">
            Nuestro talentoso equipo de fotógrafos combina experiencia, creatividad y pasión para capturar momentos
            únicos desde perspectivas extraordinarias.
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
  )
}

function PhotoCard({ fotografo }: { fotografo: Fotografo }) {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <Card className="overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full group rounded-xl">
      <div className="relative h-80 w-full overflow-hidden">
        {imgLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 rounded-full border-t-2 border-purple-500 animate-spin"></div>
            </div>
          </div>
        )}
        <Image
          src={fotografo.Foto || "/placeholder.svg"}
          alt={fotografo.usuarioNombre || "Fotógrafo"}
          fill
          className={`object-cover transition-all duration-700 ${
            imgLoading ? "opacity-0 scale-110" : "opacity-100 scale-100"
          } group-hover:scale-110`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoadingComplete={() => setImgLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white/90 text-sm mb-3 line-clamp-3">{fotografo.bio}</p>
            <a
              href={fotografo.url}
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors bg-black/30 hover:bg-purple-700/80 px-3 py-1.5 rounded-full text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={16} className="mr-2" /> Ver perfil
            </a>
          </div>
        </div>
      </div>
      <CardContent className="pt-6 pb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
          {fotografo.usuarioNombre}
        </h3>
        <p className="text-purple-600 mt-2 line-clamp-2">{fotografo.bio}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <a
          href={fotografo.url}
          className="text-sm text-gray-500 hover:text-purple-700 transition-colors flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={16} className="mr-1.5" />
          Instagram
        </a>
      </CardFooter>
    </Card>
  )
}
