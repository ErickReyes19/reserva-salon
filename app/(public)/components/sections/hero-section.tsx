"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  // Referencias para el scroll
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  // Valores transformados para efectos de parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
    >
      <motion.div className="absolute inset-0 opacity-30" style={{ y, opacity }} ref={targetRef}>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Estudio fotográfico"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm px-4 py-1.5">
            Estudio Fotográfico Profesional
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Capturamos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">momentos</span>{" "}
          inolvidables
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Donde la creatividad y la técnica se unen para crear fotografías que cuentan historias
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8" asChild>
            <a href="#reservar">Reservar Sesión</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 rounded-full px-8"
            asChild
          >
            <a href="#services">Ver Servicios</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-10 w-10 text-white/70" />
      </motion.div>
    </section>
  )
}
