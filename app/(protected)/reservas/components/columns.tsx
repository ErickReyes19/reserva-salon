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
      const inicio = getValue<string>();
      return <span>{format(new Date(inicio), "HH:mm")} hrs</span>;
    },
    enableSorting: true,
  },
  {
    header: "Hora Fin",
    accessorFn: (row) => row.horaFin,
    cell: ({ getValue }) => {
      const fin = getValue<string>();
      return <span>{format(new Date(fin), "HH:mm")} hrs</span>;
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
