"use client"

import { useState, useMemo, useEffect } from "react"
import type { ReservaEvent } from "../types"
import { startOfToday } from "date-fns"
import type { Fotografo } from "@/app/(protected)/fotografos/type"
import { getFotografosDisponibles } from "@/app/(protected)/fotografos/actions"
import { useRouter } from "next/navigation"
import CalendarSection from "./calendar-section"
import AvailableHoursSection from "./available-hours-section"
import ReservationModal from "./reservation-modal"

interface Props {
  eventos?: ReservaEvent[]
}

export default function CalendarioReservas({ eventos = [] }: Props) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday())
  const [showModal, setShowModal] = useState(false)
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [viewDate, setViewDate] = useState<Date>(startOfToday())
  const [availableHours, setAvailableHours] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fotografos, setFotografos] = useState<Fotografo[]>([])
  const [selectedFotografo, setSelectedFotografo] = useState<string>("")

  // Horario de 7 a 21
  const allHours = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 7), [])

  useEffect(() => {
    getFotografosDisponibles()
      .then((data) => setFotografos(data))
      .catch((err) => console.error(err))
  }, [])

  const handleConfirm = (name: string, email: string, phone: string) => {
    setIsLoading(true)
    const selected = fotografos.find((f) => f.id === selectedFotografo)
    const params = new URLSearchParams({
      date: selectedDate.toISOString(),
      hour: String(selectedHour),
      name,
      email,
      phone,
      fotografoId: selectedFotografo,
      fotografoName: selected?.nombre || "",
    })
    setTimeout(() => {
      router.push(`/checkout?${params.toString()}`)
    }, 500)
  }

  // Recalcular horas disponibles cuando cambia la fecha o los eventos
  useEffect(() => {
    // Función para comparar solo las fechas (sin hora)
    const isSameDay = (date1: string, date2: Date) => {
      // Extraer año, mes y día de la fecha ISO sin convertir a Date para evitar problemas de zona horaria
      const [year, month, day] = date1.split("T")[0].split("-").map(Number)

      return (
        year === date2.getFullYear() &&
        month - 1 === date2.getMonth() && // Restar 1 porque los meses en JS son 0-indexed
        day === date2.getDate()
      )
    }

    // Filtrar eventos del día seleccionado
    const eventsForSelectedDay = eventos.filter((event) => {
      if (!event || !event.fecha) return false
      return isSameDay(event.fecha, selectedDate)
    })

    // Crear conjunto de horas ocupadas
    const occupiedHours = new Set<number>()

    eventsForSelectedDay.forEach((event) => {
      // Extraer las horas y minutos de las cadenas ISO
      const startHourStr = event.horaInicio.split("T")[1].split(":")
      const endHourStr = event.horaFin.split("T")[1].split(":")

      const startHour = Number.parseInt(startHourStr[0], 10)
      const startMinute = Number.parseInt(startHourStr[1], 10)

      const endHour = Number.parseInt(endHourStr[0], 10)
      const endMinute = Number.parseInt(endHourStr[1], 10)

      // Calcular las horas afectadas
      // Si el evento comienza a la hora en punto (XX:00), comenzamos a bloquear desde esa hora
      // Si comienza a media hora (XX:30), también bloqueamos esa hora completa
      const effectiveStartHour = startHour

      // Si el evento termina a la hora en punto (XX:00), no bloqueamos esa hora
      // Si termina a cualquier otro minuto (incluyendo XX:30), bloqueamos esa hora completa
      const effectiveEndHour = endMinute > 0 ? endHour + 1 : endHour

      // Marcar todas las horas entre inicio y fin como ocupadas
      for (let h = effectiveStartHour; h < effectiveEndHour; h++) {
        occupiedHours.add(h)
      }
    })

    // Filtrar horas disponibles
    const available = allHours.filter((hour) => !occupiedHours.has(hour))
    setAvailableHours(available)
  }, [selectedDate, eventos, allHours])

  // Eventos para el calendario
  const calendarEvents = useMemo(
    () =>
      (eventos || []).map((e) => ({
        title: "Reservado",
        start: e.horaInicio,
        end: e.horaFin,
        display: "background",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      })),
    [eventos],
  )

  const handleDateClick = (date: Date) => setSelectedDate(date)
  const handleHourClick = (h: number) => {
    setSelectedHour(h)
    setShowModal(true)
  }

  return (
    <div className="flex flex-col mx-auto px-4 sm:px-6">
      {/* Calendario y Horas disponibles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CalendarSection
            viewDate={viewDate}
            setViewDate={setViewDate}
            selectedDate={selectedDate}
            calendarEvents={calendarEvents}
            onDateClick={handleDateClick}
          />
        </div>

        <div className="lg:col-span-1">
          <AvailableHoursSection
            selectedDate={selectedDate}
            availableHours={availableHours}
            onHourClick={handleHourClick}
          />
        </div>
      </div>

      {/* Modal de reserva */}
      <ReservationModal
        isOpen={showModal}
        isLoading={isLoading}
        selectedDate={selectedDate}
        selectedHour={selectedHour}
        fotografos={fotografos}
        selectedFotografo={selectedFotografo}
        setSelectedFotografo={setSelectedFotografo}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  )
}
