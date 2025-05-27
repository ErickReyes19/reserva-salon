"use client"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import type { Reserva } from "../type"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import { es } from "date-fns/locale"

// Función helper para formatear hora
const formatTime = (dateValue: string | Date): string => {
  let date: Date

  if (typeof dateValue === "string") {
    date = new Date(dateValue)
  } else {
    date = dateValue
  }

  // Usar UTC para obtener la hora exacta que viene en los datos
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()

  // Convertir a formato 12h con AM/PM
  const hh = hours % 12 || 12
  const mm = String(minutes).padStart(2, "0")
  const ampm = hours < 12 ? "AM" : "PM"

  return `${hh}:${mm} ${ampm}`
}

export const columns: ColumnDef<Reserva>[] = [
  {
    accessorKey: "clienteNombre",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Nombre Cliente
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "fotografoNombre",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Fotógrafo Asignado
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "photoServiceNombre",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Servicio 
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
{
  accessorKey: "precio",
  header: ({ column }) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="text-left"
    >
      Precio
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  ),
  cell: ({ getValue }) => {
    const raw = getValue<number>();
    const formatted = new Intl.NumberFormat('es-HN', {
      style: 'currency',
      currency: 'HNL',
      minimumFractionDigits: 2,
    }).format(raw);
    return <span>{formatted}</span>;
  },
},

  {
    id: "fechaHora",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Fecha & Horario
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    accessorFn: (row) => ({
      fecha: row.fecha,
      inicio: row.horaInicio,
      fin: row.horaFin,
    }),
    cell: ({ getValue }) => {
      const { fecha, inicio, fin } = getValue<{
        fecha: Date
        inicio: string | Date
        fin: string | Date
      }>()
      const dateStr = format(new Date(fecha), "dd 'de' MMMM yyyy", { locale: es })
      const timeStr = `${formatTime(inicio)} - ${formatTime(fin)}`
      return (
        <div className="flex flex-col">
          <span className="font-medium">{dateStr}</span>
          <span className="text-sm text-gray-500">{timeStr}</span>
        </div>
      )
    },
    enableSorting: true,
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const reserva = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir Menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <Link href={`/reservas/${reserva.clienteId}/edit`}>
              <DropdownMenuItem>Editar</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
