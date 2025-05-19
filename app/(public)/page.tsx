/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { getReservasEvent } from "./actions"
import CalendarioReservas from "./components/calendar"
import { Camera, ChevronDown, Instagram, Facebook, Twitter, Mail, MapPin, Phone, Clock, FacebookIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useScroll, useTransform } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Componente para cargar datos del servidor
import { Suspense } from "react"
import { ReservaEvent } from "./types"

// Corregir el tipo de children en los componentes
interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const AnimatedSection = ({ children, className = "", id }: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  index?: number
}

const AnimatedCard = ({ children, delay = 0, }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

// Corregir el tipo en el componente CalendarioReservasWrapper
const CalendarioReservasWrapper = () => {
  const [reservas, setReservas] = useState<ReservaEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const data = await getReservasEvent()
        setReservas(data)
      } catch (error) {
        console.error("Error fetching reservas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReservas()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return <CalendarioReservas eventos={reservas} />
}

// Componente de sección con animación al hacer scroll
// const AnimatedSection = ({ children, className = "" }) => {
//   const ref = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.unobserve(entry.target)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current)
//       }
//     }
//   }, [])

//   return (
//     <motion.section
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.section>
//   )
// }

// Componente de tarjeta con animación al hacer hover
// const AnimatedCard = ({ children, delay = 0, index = 0 }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: delay * 0.1 }}
//       whileHover={{
//         scale: 1.03,
//         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       }}
//       className="h-full"
//     >
//       {children}
//     </motion.div>
//   )
// }

export default function PublicPage() {
  // Referencias para el scroll
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  // Valores transformados para efectos de parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  // Estado para la navegación
  const [activeSection, setActiveSection] = useState("home")

  // Efecto para detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id")

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navegación fija */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-xl">FotoStudio</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Inicio" },
                { id: "about", label: "Nosotros" },
                { id: "photographers", label: "Fotógrafos" },
                { id: "services", label: "Servicios" },
                { id: "reservar", label: "Reservar" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${activeSection === item.id ? "text-purple-600" : "text-gray-600"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button className="bg-purple-600 hover:bg-purple-700">Contacto</Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                momentos
              </span>{" "}
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

        {/* About Section */}
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
                    En <span className="font-semibold text-purple-700">FotoStudio</span>, nos apasiona capturar la
                    esencia de cada momento. Desde 2010, hemos estado transformando instantes fugaces en recuerdos
                    eternos a través de nuestro lente.
                  </p>
                  <p>
                    Nuestro equipo de fotógrafos profesionales combina técnica, creatividad y pasión para crear imágenes
                    que cuentan historias. Cada fotografía es una obra de arte única, diseñada para evocar emociones y
                    preservar momentos especiales.
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

        {/* Photographers Section */}
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
              {[
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
              ].map((photographer, index) => (
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

        {/* Services Section */}
        <AnimatedSection id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Servicios</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios Fotográficos</h2>
              <p className="text-gray-600">
                Ofrecemos una amplia gama de servicios fotográficos profesionales para satisfacer todas tus necesidades.
              </p>
            </div>

            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="mx-auto flex justify-center">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="portraits">Retratos</TabsTrigger>
                <TabsTrigger value="events">Eventos</TabsTrigger>
                <TabsTrigger value="commercial">Comercial</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sesión de Retratos",
                      price: "Desde $150",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Captura tu mejor versión con nuestras sesiones de retratos profesionales.",
                      category: "portraits",
                    },
                    {
                      name: "Fotografía de Bodas",
                      price: "Desde $800",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Inmortalizamos cada momento especial de tu día más importante.",
                      category: "events",
                    },
                    {
                      name: "Sesiones de Moda",
                      price: "Desde $200",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Perfectas para modelos o cualquier persona que quiera un book profesional.",
                      category: "portraits",
                    },
                    {
                      name: "Eventos Corporativos",
                      price: "Desde $300",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Cobertura completa para tus eventos empresariales y conferencias.",
                      category: "events",
                    },
                    {
                      name: "Fotografía de Producto",
                      price: "Desde $100",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Resalta tus productos con fotografías de alta calidad para tu negocio.",
                      category: "commercial",
                    },
                    {
                      name: "Sesiones Familiares",
                      price: "Desde $180",
                      img: "/placeholder.svg?height=300&width=400",
                      description:
                        "Captura momentos especiales con tus seres queridos en locaciones interiores o exteriores.",
                      category: "portraits",
                    },
                  ].map((service, index) => (
                    <AnimatedCard key={index} delay={index}>
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={service.img || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{service.name}</CardTitle>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              {service.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Ver detalles
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portraits" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sesión de Retratos",
                      price: "Desde $150",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Captura tu mejor versión con nuestras sesiones de retratos profesionales.",
                    },
                    {
                      name: "Sesiones de Moda",
                      price: "Desde $200",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Perfectas para modelos o cualquier persona que quiera un book profesional.",
                    },
                    {
                      name: "Sesiones Familiares",
                      price: "Desde $180",
                      img: "/placeholder.svg?height=300&width=400",
                      description:
                        "Captura momentos especiales con tus seres queridos en locaciones interiores o exteriores.",
                    },
                  ].map((service, index) => (
                    <AnimatedCard key={index} delay={index}>
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={service.img || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{service.name}</CardTitle>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              {service.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Ver detalles
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </TabsContent>

              {/* Contenido similar para las otras pestañas */}
              <TabsContent value="events" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      name: "Fotografía de Bodas",
                      price: "Desde $800",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Inmortalizamos cada momento especial de tu día más importante.",
                    },
                    {
                      name: "Eventos Corporativos",
                      price: "Desde $300",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Cobertura completa para tus eventos empresariales y conferencias.",
                    },
                  ].map((service, index) => (
                    <AnimatedCard key={index} delay={index}>
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={service.img || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{service.name}</CardTitle>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              {service.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Ver detalles
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="commercial" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
                  {[
                    {
                      name: "Fotografía de Producto",
                      price: "Desde $100",
                      img: "/placeholder.svg?height=300&width=400",
                      description: "Resalta tus productos con fotografías de alta calidad para tu negocio.",
                    },
                  ].map((service, index) => (
                    <AnimatedCard key={index} delay={index}>
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={service.img || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="100vw"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{service.name}</CardTitle>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              {service.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Ver detalles
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-800/50 text-purple-200 hover:bg-purple-800/50 border-purple-700">
                Portafolio
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Nuestros Mejores Trabajos</h2>
              <p className="text-gray-300">
                Explora nuestra colección de fotografías destacadas que muestran nuestro estilo y calidad.
              </p>
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((item) => (
                  <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="relative h-80 overflow-hidden rounded-xl">
                        <Image
                          src={`/placeholder.svg?height=400&width=300&text=Foto ${item}`}
                          alt={`Portfolio item ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            <h3 className="font-bold">Proyecto {item}</h3>
                            <p className="text-sm text-gray-200">Categoría de fotografía</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static mr-2 bg-white/10 hover:bg-white/20 border-none text-white" />
                <CarouselNext className="static ml-2 bg-white/10 hover:bg-white/20 border-none text-white" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Testimonios</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
              <p className="text-gray-600">
                Descubre por qué nuestros clientes confían en nosotros para capturar sus momentos más importantes.
              </p>
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    name: "María González",
                    role: "Cliente Frecuente",
                    quote:
                      "Las fotografías que me tomaron para mi book profesional superaron todas mis expectativas. ¡Increíble trabajo!",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Juan Pérez",
                    role: "Recién Casado",
                    quote:
                      "Contratamos sus servicios para nuestra boda y fue la mejor decisión. Capturaron cada momento especial exactamente como lo queríamos.",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Laura Ramírez",
                    role: "Empresaria",
                    quote:
                      "Las fotos de producto que realizaron para mi tienda online aumentaron mis ventas significativamente. Profesionales y creativos.",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    name: "Carlos Mendez",
                    role: "Modelo",
                    quote:
                      "Mi portafolio quedó espectacular. La calidad y creatividad de las fotos me han ayudado a conseguir importantes contratos.",
                    avatar: "/placeholder.svg?height=100&width=100",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <Card className="border-none shadow-md h-full flex flex-col">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12 border-2 border-purple-200">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback className="bg-purple-100 text-purple-800">
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-gray-900">{testimonial.name}</p>
                              <p className="text-gray-500 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static mr-2" />
                <CarouselNext className="static ml-2" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>

        {/* Booking Section */}
        <AnimatedSection id="reservar" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Reservas</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Reserva tu Sesión Fotográfica</h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Selecciona la fecha y hora que prefieras para tu sesión fotográfica. Nuestro equipo estará encantado de
                atenderte.
              </p>
            </div>
            <Card className="border-none shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Columna izquierda: Información de contacto (1/4) */}
                  <div className="lg:col-span-1 bg-purple-900 p-8 text-white flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="h-6 w-6 text-purple-300 pt-1" />
                          <div>
                            <h4 className="font-semibold text-purple-200">Dirección</h4>
                            <p className="text-white/80">Calle Principal 123, Ciudad</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <Phone className="h-6 w-6 text-purple-300 pt-1" />
                          <div>
                            <h4 className="font-semibold text-purple-200">Teléfono</h4>
                            <p className="text-white/80">(123) 456-7890</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <Mail className="h-6 w-6 text-purple-300 pt-1" />
                          <div>
                            <h4 className="font-semibold text-purple-200">Email</h4>
                            <p className="text-white/80">info@fotostudio.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <Clock className="h-6 w-6 text-purple-300 pt-1" />
                          <div>
                            <h4 className="font-semibold text-purple-200">Horario</h4>
                            <p className="text-white/80">Lun - Vie: 9:00 AM - 8:00 PM</p>
                            <p className="text-white/80">Sáb: 10:00 AM - 6:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h4 className="font-semibold text-purple-200 mb-4">Síguenos</h4>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                        >
                          <FacebookIcon size={20} />
                        </a>
                        <a
                          href="#"
                          className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                        >
                          <Instagram size={20} />
                        </a>
                        <a
                          href="#"
                          className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                        >
                          <Twitter size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Columna derecha: Calendario + horas (3/4) */}
                  <div className="lg:col-span-3 p-8">
                    <Suspense
                      fallback={
                        <div className="flex justify-center items-center h-64">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
                        </div>
                      }
                    >
                      <CalendarioReservasWrapper />
                    </Suspense>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Camera className="h-6 w-6 text-purple-400" />
                  <span className="font-bold text-xl">FotoStudio</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Capturando momentos, creando recuerdos. Nuestro estudio fotográfico profesional está dedicado a la
                  excelencia visual.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-6">Enlaces Rápidos</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Inicio", href: "#home" },
                    { label: "Sobre Nosotros", href: "#about" },
                    { label: "Servicios", href: "#services" },
                    { label: "Portafolio", href: "#portfolio" },
                    { label: "Contacto", href: "#contact" },
                  ].map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-6">Servicios</h3>
                <ul className="space-y-3">
                  {[
                    "Fotografía de Retratos",
                    "Fotografía de Bodas",
                    "Fotografía de Eventos",
                    "Fotografía de Producto",
                    "Sesiones Familiares",
                  ].map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-6">Contacto</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-purple-400" />
                    <span>Calle Principal 123, Ciudad, CP 12345</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-purple-400" />
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-400" />
                    <span>info@fotostudio.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} FotoStudio. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
