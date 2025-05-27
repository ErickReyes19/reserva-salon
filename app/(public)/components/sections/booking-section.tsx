"use client"

import { useEffect, useState, Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import type { ReservaEvent } from "../../types"
import { getReservasEvent } from "../../actions"
import CalendarioReservas from "../calendar"
import AnimatedSection from "../animated-section"

// Componente para cargar datos del servidor
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

export default function BookingSection() {
  return (
    <AnimatedSection id="reservar" className="py-12 bg-gray-50">
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
            {/* Calendario a ancho completo */}
            <div className="p-2">
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
            <div className="flex flex-col">
              {/* Información de contacto en la parte superior */}
              <div className="bg-purple-900 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-purple-300 pt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-200">Dirección</h4>
                      <p className="text-white/80">Calle Principal 123, Ciudad</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-purple-300 pt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-200">Teléfono</h4>
                      <p className="text-white/80">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-purple-300 pt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-200">Email</h4>
                      <p className="text-white/80">info@ElStudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-purple-300 pt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-200">Horario</h4>
                      <p className="text-white/80">Lun - Vie: 9:00 AM - 8:00 PM</p>
                      <p className="text-white/80">Sáb: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="mt-6 flex items-center justify-center md:justify-end gap-3 border-t border-white/10 pt-6">
                  <span className="text-purple-200 mr-2">Síguenos:</span>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                  >
                    <Facebook size={20} />
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
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  )
}
