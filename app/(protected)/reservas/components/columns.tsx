"use client";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Reserva } from "../type";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { es } from "date-fns/locale";

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
    header: "Fecha",
    accessorFn: (row) => row.fecha,
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return <span>{format(new Date(date), "dd 'de' MMMM yyyy", { locale: es })}</span>;
    },
    enableSorting: true,
  },
  {
    header: "Hora Inicio",
    accessorFn: (row) => row.horaInicio,
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      // 1) Aseguramos un Date en UTC
      const dateUtc =
        typeof val === "string"
          ? new Date(val.replace(" ", "T") + "Z")
          : val
      // 2) Sacamos horas y minutos en UTC
      const hours = dateUtc.getUTCHours()
      const minutes = dateUtc.getUTCMinutes()
      // 3) Convertimos a formato 12h con AM/PM
      const hh = hours % 12 || 12
      const mm = String(minutes).padStart(2, "0")
      const ampm = hours < 12 ? "AM" : "PM"

      return <span>{`${hh}:${mm} ${ampm}`}</span>
    },
    enableSorting: true,
  },
{
  header: "Hora Fin",
  accessorFn: (row) => row.horaFin,
  cell: ({ getValue }) => {
    const val = getValue<string | Date>()
    console.log("🚀 ~ getValue:", val)

    // 1) Obtener un Date UTC correcto
    let dateUtc: Date
    if (typeof val === "string") {
      if (val.endsWith("Z")) {
        // Ya viene en ISO UTC
        dateUtc = new Date(val)
      } else {
        // Formato SQL “YYYY-MM-DD HH:mm:ss”
        dateUtc = new Date(val.replace(" ", "T") + "Z")
      }
    } else {
      // Si ya es Date, construimos uno nuevo en UTC puro
      dateUtc = new Date(
        Date.UTC(
          val.getFullYear(),
          val.getMonth(),
          val.getDate(),
          val.getHours(),
          val.getMinutes(),
          val.getSeconds()
        )
      )
    }

    // 2) Sacar horas y minutos en UTC
    const hours = dateUtc.getUTCHours()
    const minutes = dateUtc.getUTCMinutes()

    // 3) Convertir a 12h + AM/PM
    const hh = hours % 12 || 12
    const mm = String(minutes).padStart(2, "0")
    const ampm = hours < 12 ? "AM" : "PM"

    return <span>{`${hh}:${mm} ${ampm}`}</span>
  },
  enableSorting: true,
},


  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const reserva = row.original;
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
      );
    },
  },
];
