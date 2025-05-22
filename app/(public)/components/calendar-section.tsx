"use client"

import { useMemo } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"

interface CalendarSectionProps {
  viewDate: Date
  setViewDate: (date: Date) => void
  selectedDate: Date
  calendarEvents: any[]
  onDateClick: (date: Date) => void
}

export default function CalendarSection({
  viewDate,
  setViewDate,
  selectedDate,
  calendarEvents,
  onDateClick,
}: CalendarSectionProps) {
  // Dropdown meses
  const monthOptions = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        value: i.toString(),
        label: format(new Date(viewDate.getFullYear(), i, 1), "LLLL yyyy", { locale: es }),
      })),
    [viewDate],
  )

  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
  const handleMonthChange = (val: string) => {
    setViewDate(new Date(viewDate.getFullYear(), Number(val), 1))
  }

  const handleDateClick = (arg: { date: Date }) => onDateClick(arg.date)

  return (
    <Card className="shadow-md overflow-hidden border border-gray-200 rounded-xl">
      <CardHeader className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border-b space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2 w-full justify-between sm:justify-start">
          <CalendarIcon className="h-5 w-5 text-indigo-600 hidden sm:block" />
          <h2 className="text-lg font-semibold text-gray-800">Calendario</h2>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
          <Button size="icon" variant="outline" onClick={prevMonth} className="h-8 w-8 rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Select onValueChange={handleMonthChange} value={viewDate.getMonth().toString()}>
            <SelectTrigger className="w-[160px] sm:w-[180px] h-9 rounded-full">
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
          <Button size="icon" variant="outline" onClick={nextMonth} className="h-8 w-8 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 bg-white">
        <style jsx global>{`
  .fc-theme-standard td, .fc-theme-standard th {
    border-color: #e5e7eb;
  }
  .fc-theme-standard .fc-scrollgrid {
    border-color: #e5e7eb;
  }
  .fc-day-today {
    background-color: #f3f4f6 !important;
  }
  .fc-daygrid-day-number {
    font-size: 0.875rem;
    padding: 0;
    color: #4b5563;
    width: 100%;
    text-align: center;
  }
  .fc-daygrid-day-top {
    justify-content: center;
    padding-top: 4px;
  }
  .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
    font-weight: 600;
    color: #4f46e5;
  }
  .fc-col-header-cell {
    padding: 6px 0;
    background-color: #f9fafb;
  }
  .fc-col-header-cell-cushion {
    font-weight: 500;
    color: #6b7280;
    width: 100%;
    text-align: center;
    padding: 0;
  }
  .fc .fc-daygrid-day-frame {
    min-height: 3.5rem;
  }
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    position: relative;
    min-height: 0;
  }
  
  /* Mobile optimizations */
  @media (max-width: 640px) {
    .fc-daygrid-day-number {
      font-size: 0.75rem;
    }
    .fc-col-header-cell-cushion {
      font-size: 0.75rem;
    }
    .fc .fc-daygrid-day-frame {
      min-height: 2.5rem;
    }
  }
`}</style>
        <div className="p-0 sm:p-2">
          <FullCalendar
            key={viewDate.getTime()}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate={viewDate}
            headerToolbar={false}
            height="auto"
            events={calendarEvents}
            dateClick={handleDateClick}
            locale="es"
            dayCellContent={(arg) => (
              <div className="flex items-center justify-center w-full h-full">{arg.dayNumberText}</div>
            )}
            dayCellClassNames={({ date }) =>
              date.toDateString() === selectedDate.toDateString()
                ? "bg-indigo-50 hover:bg-indigo-100 transition-colors"
                : "hover:bg-gray-50 transition-colors"
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}
