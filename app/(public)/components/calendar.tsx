"use client";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ReservaEvent } from "../types";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { DateClickArg } from "@fullcalendar/interaction";

interface Props {
  eventos: ReservaEvent[];
}

export default function CalendarioReservas({ eventos }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(new Date(arg.dateStr));
    setShowModal(true);
  };


  return (
    <>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={eventos.map((event) => ({
          ...event,
          title: event.title,
          extendedProps: { ...event },
        }))}
        height="auto"
        selectable={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventMouseEnter={(info) => {
          const tooltip = document.createElement("div");
          tooltip.innerHTML = `<div class="bg-black text-white text-sm rounded px-2 py-1 shadow">
              Cliente: ${info.event.extendedProps.cliente}<br/>
              Estado: ${info.event.extendedProps.estado}
            </div>`;
          tooltip.style.position = "absolute";
          tooltip.style.top = `${info.jsEvent.pageY + 10}px`;
          tooltip.style.left = `${info.jsEvent.pageX + 10}px`;
          tooltip.style.zIndex = "1000";
          tooltip.id = "calendar-tooltip";
          document.body.appendChild(tooltip);
        }}
        eventMouseLeave={() => {
          const tooltip = document.getElementById("calendar-tooltip");
          if (tooltip) tooltip.remove();
        }}
        dateClick={handleDateClick}
      />

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Crear nueva reserva</DialogTitle>
          </DialogHeader>
          {selectedDate && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Fecha seleccionada:{" "}
                <span className="font-medium">{format(selectedDate, "PPPPpp")}</span>
              </p>
              {/* Aquí va tu formulario */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre del cliente"
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Servicio"
                  className="w-full border px-3 py-2 rounded"
                />
                <Button type="submit">Crear reserva</Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
