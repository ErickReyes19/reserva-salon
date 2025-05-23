// app/fotografos/[id]/disponibilidad/components/disponibilidad-list-mobile.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Search, CalendarDays } from "lucide-react";
import { Unavailability } from "../type";

interface DisponibilidadListMobileProps {
  disponibilidad: Unavailability[];
}

const WEEKDAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export default function DisponibilidadListMobile({
  disponibilidad,
}: DisponibilidadListMobileProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar por texto que aparezca en tipo (recurrente o fecha) o en activo/inactivo
  const filtered = disponibilidad.filter((r) => {
    // Estado
    const status = r.activo ? "activo" : "inactivo";

    // Texto principal (sin usar horas cuando es recurrente)
    let label: string;
    if (r.recurring) {
      // Solo día de la semana
      label = `Cada ${WEEKDAYS[r.weekday!]}`;
    } else {
      // Rango de fechas
      const dayRange = `${r.startDate?.slice(0, 10)} → ${r.endDate?.slice(0, 10)}`;
      // Extraemos horas solo aquí
      const from = r.startTime?.slice(11, 16) ?? "--:--";
      const to = r.endTime?.slice(11, 16) ?? "--:--";
      label = `${dayRange} de ${from} a ${to}`;
    }

    const text = `${label} ${status}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });


  return (
    <div className="space-y-4">
      {/* Botón para crear nueva disponibilidad */}
      <Link href="./create">
        <Button className="w-full flex items-center justify-center gap-2">
          <Plus /> Agregar Disponibilidad
        </Button>
      </Link>

      {/* Buscador */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar disponibilidad..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Listado */}
      {filtered.map((rule) => {
        const label = rule.recurring
          ? `Cada ${WEEKDAYS[rule.weekday!]}`
          : `${rule.startDate?.slice(0, 10)} → ${rule.endDate?.slice(0, 10)}`;
        const times = !rule.recurring
          ? `${rule.startTime?.slice(11, 16) ?? "--:--"} – ${rule.endTime?.slice(11, 16) ?? "--:--"}`
          : "";
        const status = rule.activo ? "Activo" : "Inactivo";

        return (
          <div
            key={rule.id}
            className="flex items-center justify-between p-3 border rounded-lg shadow"
          >
            <div className="min-w-0">
              <p className="font-medium truncate">{label}</p>
              <p className="text-sm text-muted-foreground truncate">{times}</p>
              <p className="text-sm">
                <span
                  className={`px-2 py-0.5 rounded ${rule.activo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                >
                  {status}
                </span>
              </p>
            </div>

            <div>
              <Link href={`./${rule.id}/edit`}>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Pencil className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <p className="text-center text-gray-500">
          No se encontraron disponibilidad.
        </p>
      )}

      {filtered.length > 0 && (
        <p className="text-sm text-center text-muted-foreground">
          Mostrando {filtered.length} de {disponibilidad.length} registros
        </p>
      )}
    </div>
  );
}
