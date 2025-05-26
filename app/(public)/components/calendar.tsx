"use client";

import { useState, useMemo, useEffect } from "react";
import type { ReservaEvent } from "../types";
import { startOfToday } from "date-fns";
import type { Fotografo } from "@/app/(protected)/fotografos/type";
import { getFotografosDisponibles } from "@/app/(protected)/fotografos/actions";
import { useRouter } from "next/navigation";
import CalendarSection from "./calendar-section";
import AvailableHoursSection from "./available-hours-section";
import ReservationModal from "./reservation-modal";

interface Props {
  eventos?: ReservaEvent[];
}

export default function CalendarioReservas({ eventos = [] }: Props) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [viewDate, setViewDate] = useState<Date>(startOfToday());
  const [availableHours, setAvailableHours] = useState<number[]>([]);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [fotografos, setFotografos] = useState<Fotografo[]>([]);
  const [selectedFotografo, setSelectedFotografo] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Horario de 7 a 21
  const allHours = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 7), []);

  // Cuando cambia la fecha, recalcular horas disponibles
  useEffect(() => {
    const isSameDay = (date1: string, date2: Date) => {
      const [year, month, day] = date1
        .split("T")[0]
        .split("-")
        .map(Number);
      return (
        year === date2.getFullYear() &&
        month - 1 === date2.getMonth() &&
        day === date2.getDate()
      );
    };

    const eventsForDay = eventos.filter(
      (e) => e.fecha && isSameDay(e.fecha, selectedDate)
    );
    const occupied = new Set<number>();
    eventsForDay.forEach((e) => {
      const [sh, sm] = e.horaInicio.split("T")[1].split(":").map(Number);
      const [eh, em] = e.horaFin.split("T")[1].split(":").map(Number);
      const startH = sh;
      const endH = em > 0 ? eh + 1 : eh;
      for (let h = startH; h < endH; h++) occupied.add(h);
    });

    setAvailableHours(allHours.filter((h) => !occupied.has(h)));
  }, [selectedDate, eventos, allHours]);

  // Cargar fotógrafos solo al abrir el modal
  useEffect(() => {
    if (showModal) {
      getFotografosDisponibles(selectedDate)
        .then(setFotografos)
        .catch(console.error);
    }
  }, [showModal, selectedDate]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowModal(false);
  };

  const handleHourClick = (hour: number) => {
    setSelectedHour(hour);
    setShowModal(true);
  };

  const handleConfirm = (
    name: string,
    email: string,
    phone: string
  ) => {
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
    router.push(`/checkout?${params.toString()}`);
  };

  const calendarEvents = useMemo(
    () =>
      eventos.map((e) => ({
        title: "Reservado",
        start: e.horaInicio,
        end: e.horaFin,
        display: "background",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      })),
    [eventos]
  );

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
  );
}
