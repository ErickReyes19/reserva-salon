"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Camera,
  CameraOff,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  User,
  Loader2,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { Fotografo } from "@/app/(protected)/fotografos/type"
import type { Galeria } from "@/app/(protected)/fotografos/[id]/galeria/type"

interface Props {
  open: boolean
  onClose: () => void
  fotografo: Fotografo
  fotos: Galeria[]
  loading?: boolean
}

export default function PhotographerGalleryDialog({
  open,
  onClose,
  fotografo,
  fotos,
  loading = false,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || fotos.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % fotos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, fotos.length])

  const goToPrevious = () =>
    setCurrentIndex((i) => (i - 1 + fotos.length) % fotos.length)
  const goToNext = () => setCurrentIndex((i) => (i + 1) % fotos.length)
  const goToSlide = (i: number) => setCurrentIndex(i)
  const toggleAutoPlay = () => setIsAutoPlaying((v) => !v)

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-lg">
        <DialogHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarFallback className="bg-indigo-800 text-white">
                {getInitials(fotografo.nombre)}
              </AvatarFallback>
            </Avatar>
            <DialogTitle className="text-lg font-bold">
              Galería de {fotografo.nombre}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="p-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
            </div>
          ) : fotos.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <CameraOff className="h-12 w-12 mb-2" />
              <p>Sin fotografías disponibles</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Carrusel reducido */}
              <div className="w-full lg:w-2/3">
                <Card className="border shadow-lg overflow-hidden bg-black">
                  <CardContent className="p-0 relative">
                    <div className="relative aspect-video overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                      >
                        {fotos.map((foto, idx) => (
                          <div key={foto.id} className="w-full flex-shrink-0 relative">
                            <Image
                              src={foto.url}
                              alt={foto.nombreFoto}
                              fill
                              className="object-cover"
                              priority={idx === currentIndex}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white">
                              {foto.nombreFoto}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Controles */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                        onClick={goToPrevious}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                        onClick={goToNext}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                        onClick={toggleAutoPlay}
                      >
                        {isAutoPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {currentIndex + 1} / {fotos.length}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Indicadores */}
                <div className="mt-3 flex items-center justify-between">
                  <Badge variant="outline" className="flex items-center gap-1 text-xs">
                    <Camera className="h-4 w-4" />
                    {fotos.length} fotos
                  </Badge>
                </div>
              </div>

              {/* Biografía ajustada */}
              <div className="w-full lg:w-1/3">
                <Card className="h-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-indigo-600" />
                      <h3 className="text-lg font-bold text-gray-800">
                        {fotografo.nombre}
                      </h3>
                    </div>
                  </CardHeader>
                  <Separator className="mx-4" />
                  <CardContent className="pt-2 pb-4">
                    <ScrollArea className="h-[150px] pr-2">
                      {fotografo.bio ? (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {fotografo.bio}
                        </p>
                      ) : (
                        <p className="text-center text-gray-400">
                          Sin biografía disponible
                        </p>
                      )}
                    </ScrollArea>
                    <div className="mt-4 bg-white p-3 rounded-lg border">
                      <p className="text-xs text-gray-500 uppercase font-medium">
                        Portafolio
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {fotos.length}
                      </p>
                    </div>
                    <div className="mt-4 bg-green-50 p-3 rounded-lg flex items-center justify-between text-sm">
                      <span>Disponible para reservas</span>
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
