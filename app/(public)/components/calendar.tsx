"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { useState, useMemo, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReservaEvent } from "../types"
import { format, startOfToday } from "date-fns"
import { es } from "date-fns/locale"
import { motion } from "framer-motion"
import { Calendar, Clock, Loader2, Mail, Phone, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { getFotografosDisponibles } from "@/app/(protected)/fotografos/actions"
import { Fotografo } from "@/app/(protected)/fotografos/type"

interface Props {
  eventos?: ReservaEvent[]
}

// Función para convertir hora de formato 24h a 12h
const formatHour = (hour: number): string => {
  const period = hour >= 12 ? "PM" : "AM"
  const h = hour % 12 || 12
  return `${h}:00 ${period}`
}

export default function CalendarioReservas({ eventos = [] }: Props) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday())
  const [showModal, setShowModal] = useState(false)
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [viewDate, setViewDate] = useState<Date>(startOfToday())
  const [availableHours, setAvailableHours] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fotografos, setFotografos] = useState<Fotografo[]>([]);
  const [selectedFotografo, setSelectedFotografo] = useState<string>("");

  useEffect(() => {
    getFotografosDisponibles()
      .then((data) => setFotografos(data))
      .catch((err) => console.error(err));
  }, []);

  // Horario de 7 a 21
  const allHours = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 7), [])

  const handleConfirm = (name: string, email: string, phone: string) => {
    setIsLoading(true);
    const selected = fotografos.find((f) => f.id === selectedFotografo);
    const params = new URLSearchParams({
      date: selectedDate.toISOString(),
      hour: String(selectedHour),
      name,
      email,
      phone,
      fotografoId: selectedFotografo,
      fotografoName: selected?.nombre || "",
    });
    setTimeout(() => {
      router.push(`/checkout?${params.toString()}`);
    }, 500);
  };

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
      // Extraer las horas directamente de las cadenas ISO sin convertir a Date
      // para evitar problemas de zona horaria
      const startHour = Number.parseInt(event.horaInicio.split("T")[1].split(":")[0], 10)
      const endHour = Number.parseInt(event.horaFin.split("T")[1].split(":")[0], 10)

      // Si inicio y fin son iguales, asumir duración de 1 hora
      const finalHour = startHour === endHour ? endHour + 1 : endHour

      // Marcar todas las horas entre inicio y fin como ocupadas
      for (let h = startHour; h < finalHour; h++) {
        occupiedHours.add(h)
      }
    })

    // Filtrar horas disponibles
    const available = allHours.filter((hour) => !occupiedHours.has(hour))
    setAvailableHours(available)
  }, [selectedDate, eventos, allHours])

  // Dropdown meses
  const monthOptions = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        value: i.toString(),
        label: format(new Date(viewDate.getFullYear(), i, 1), "LLLL yyyy", { locale: es }),
      })),
    [viewDate],
  )

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

  const prevMonth = () => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
  const nextMonth = () => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
  const handleMonthChange = (val: string) => {
    setViewDate(new Date(viewDate.getFullYear(), Number(val), 1))
  }

  const handleDateClick = (arg: { date: Date }) => setSelectedDate(arg.date)
  const handleHourClick = (h: number) => {
    setSelectedHour(h)
    setShowModal(true)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Calendario */}
      <Card className="flex-1 shadow-lg">
        <CardHeader className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost" onClick={prevMonth}>
              ‹
            </Button>
            <Select onValueChange={handleMonthChange} value={viewDate.getMonth().toString()}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder={format(viewDate, "LLLL yyyy", { locale: es })} />
              </SelectTrigger>
              <SelectContent>
                {monthOptions.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="icon" variant="ghost" onClick={nextMonth}>
              ›
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <FullCalendar
            key={viewDate.getTime()}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate={viewDate}
            headerToolbar={false}
            height="auto"
            events={calendarEvents}
            dateClick={handleDateClick}
            locale="es" // Configurar FullCalendar en español
            dayCellContent={(arg) => (
              <div className="flex items-center justify-center w-full h-full">{arg.dayNumberText}</div>
            )}
            dayCellClassNames={({ date }) =>
              date.toDateString() === selectedDate.toDateString() ? "bg-blue-100" : "hover:bg-blue-50"
            }
          />
        </CardContent>
      </Card>

      {/* Horas disponibles */}
      <Card className="w-full lg:w-1/3 shadow-lg">
        <CardHeader className="bg-white border-b p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-indigo-600" />
            <CardTitle>Disponible</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="mb-4 text-sm text-gray-500">
            {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {availableHours.length ? (
              availableHours.map((h) => (
                <motion.button
                  key={h}
                  onClick={() => handleHourClick(h)}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-2 rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100"
                >
                  {formatHour(h)}
                </motion.button>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-400 py-4">Sin disponibilidad</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Modal mejorado */}
      <Dialog open={showModal} onOpenChange={(open) => !isLoading && setShowModal(open)} >
        <DialogContent className="rounded-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">Confirmar Reserva</DialogTitle>

            {/* Información de la reserva en el header */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">
                  {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">{selectedHour !== null ? formatHour(selectedHour) : ""}</span>
              </div>
            </div>

          </DialogHeader>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-4" />
              <p className="text-gray-600">Procesando su reserva...</p>
            </div>
          ) : (
            <form
              className="space-y-4 py-2"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const name = (form.elements.namedItem("name") as HTMLInputElement).value
                const email = (form.elements.namedItem("email") as HTMLInputElement).value
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
                handleConfirm(name, email, phone)
              }}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <Input name="name" className="w-full" placeholder="Nombre" required />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <Input name="email" className="w-full" placeholder="Correo" type="email" required />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2"><User className="h-4 w-4 text-gray-500" /><Select onValueChange={setSelectedFotografo} value={selectedFotografo}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Elige un fotógrafo" />
                  </SelectTrigger>
                  <SelectContent>
                    {fotografos.map((f) => (
                      <SelectItem key={f.id} value={f.id || ""}>{f.nombre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select></div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <Input name="phone" className="w-full" placeholder="Teléfono" type="tel" required />
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button variant="outline" type="button" onClick={() => setShowModal(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Confirmar Reserva</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
