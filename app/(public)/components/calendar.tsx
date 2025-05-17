"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { useState, useMemo, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReservaEvent } from "../types"
import { format, startOfToday } from "date-fns"
import { es } from "date-fns/locale"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday())
  const [showModal, setShowModal] = useState(false)
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [viewDate, setViewDate] = useState<Date>(startOfToday())
  const [availableHours, setAvailableHours] = useState<number[]>([])

  // Horario de 7 a 21
  const allHours = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 7), [])

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

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reservar cita</DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-4">
            <p className="text-sm">
              <strong>Fecha:</strong> {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
              <br />
              <strong>Hora:</strong> {selectedHour !== null ? formatHour(selectedHour) : ""}
            </p>
            {/* formulario intacto */}
            <div className="space-y-2">
              <input className="w-full border rounded px-3 py-2" placeholder="Nombre" />
              <input className="w-full border rounded px-3 py-2" placeholder="Correo" type="email" />
              <input className="w-full border rounded px-3 py-2" placeholder="Teléfono" type="tel" />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button>Confirmar</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
