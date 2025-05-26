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
import type { PhotoService } from "@/app/(protected)/servicios/type"
import { getServiciosPorFotografos } from "@/app/(protected)/servicios/actions"

interface Props {
  eventos?: ReservaEvent[]
}

export default function CalendarioReservas({ eventos = [] }: Props) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday())
  const [viewDate, setViewDate] = useState<Date>(startOfToday())
  const [availableHours, setAvailableHours] = useState<number[]>([])
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [allFotografos, setAllFotografos] = useState<Fotografo[]>([])
  const [fotografos, setFotografos] = useState<Fotografo[]>([])
  const [services, setServices] = useState<PhotoService[]>([])
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedFotografo, setSelectedFotografo] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isServicesLoading, setIsServicesLoading] = useState(false)

  // Horario de 7 a 21
  const allHours = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 7), [])

  // Recalcular horas disponibles al cambiar fecha
  useEffect(() => {
    const isSameDay = (date1: string, date2: Date) => {
      const [year, month, day] = date1.split("T")[0].split("-").map(Number)
      return year === date2.getFullYear() && month - 1 === date2.getMonth() && day === date2.getDate()
    }
    const eventsForDay = eventos.filter((e) => e.fecha && isSameDay(e.fecha, selectedDate))
    const occupied = new Set<number>()
    eventsForDay.forEach((e) => {
      const [sh] = e.horaInicio.split("T")[1].split(":").map(Number)
      const [eh, em] = e.horaFin.split("T")[1].split(":").map(Number)
      for (let h = sh; h < (em > 0 ? eh + 1 : eh); h++) occupied.add(h)
    })
    setAvailableHours(allHours.filter((h) => !occupied.has(h)))
  }, [selectedDate, eventos, allHours])

  // Cuando eligen hora, cargar fotógrafos y servicios y preparar modal
  const handleHourClick = async (hour: number) => {
    setSelectedHour(hour)
    // reset filtros
    setSelectedService("")
    setSelectedFotografo("")
    setShowModal(true)
    setIsServicesLoading(true)

    try {
      // fotógrafos disponibles
      const list = await getFotografosDisponibles(selectedDate)
      setAllFotografos(list)
      setFotografos(list)

      // servicios de esos fotógrafos
      const ids = list.map((f) => f.id!)
      const svcs = await getServiciosPorFotografos(ids)
      setServices(svcs)
    } catch (error) {
      console.error(error)
    } finally {
      setIsServicesLoading(false)
    }
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setShowModal(false)
    setSelectedService("")
  }

  // Al seleccionar un servicio, filtrar fotógrafos que lo ofrecen
  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId)
    setSelectedFotografo("") // Reset fotógrafo cuando cambia servicio

    if (serviceId) {
      const svc = services.find((s) => s.id === serviceId)
      if (svc) {
        setFotografos(allFotografos.filter((f) => svc.fotografos?.includes(f.id!)))
      }
    } else {
      setFotografos(allFotografos)
    }
  }

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
      serviceId: selectedService,
    })
    router.push(`/checkout?${params.toString()}`)
  }

  const calendarEvents = useMemo(
    () =>
      eventos.map((e) => ({
        title: "Reservado",
        start: e.horaInicio,
        end: e.horaFin,
        display: "background",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      })),
    [eventos],
  )

  return (
    <div className="flex flex-col mx-auto px-4 sm:px-6">
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
      <ReservationModal
        isOpen={showModal}
        isLoading={isLoading || isServicesLoading}
        selectedDate={selectedDate}
        selectedHour={selectedHour}
        fotografos={fotografos}
        services={services}
        selectedService={selectedService}
        onServiceChange={handleServiceChange}
        selectedFotografo={selectedFotografo}
        setSelectedFotografo={setSelectedFotografo}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  )
}
