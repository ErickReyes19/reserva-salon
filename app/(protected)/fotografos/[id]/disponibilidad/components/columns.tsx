"use client";

import { ArrowUpDown, CheckCircleIcon, XCircleIcon, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Unavailability } from "../type";

const WEEKDAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export const columns: ColumnDef<Unavailability>[] = [
  {
    accessorKey: "fotografoNombre",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Fotógrafo
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "periodo",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Período
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const r = row.original;
      return r.recurring
        ? `Cada ${WEEKDAYS[r.weekday!]}`
        : `${r.startDate?.slice(0, 10)} → ${r.endDate?.slice(0, 10)}`;
    },
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Hora inicio
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const t = (getValue() as string).slice(11, 16);
      return <span>{t}</span>;
    },
  },
  {
    accessorKey: "endTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Hora fin
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const t = (getValue() as string).slice(11, 16);
      return <span>{t}</span>;
    },
  },
  {
    accessorKey: "activo",
    header: "Estado",
    cell: ({ getValue }) => {
      const active = getValue() as boolean;
      return active ? (
        <div className="flex items-center">
          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
          <span>Activo</span>
        </div>
      ) : (
        <div className="flex items-center">
          <XCircleIcon className="h-4 w-4 text-red-500 mr-1" />
          <span>Inactivo</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const rule = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <Link
              href={`/fotografos/${rule.fotografoId}/disponibilidad/${rule.id}/edit`}
            >
              <DropdownMenuItem>Editar</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
