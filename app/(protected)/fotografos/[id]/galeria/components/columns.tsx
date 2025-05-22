"use client";
import { ArrowUpDown, CheckCircleIcon } from "lucide-react";
// import { FormateadorFecha } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, XCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Galeria } from "../type";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const columns: ColumnDef<Galeria>[] = [

  {
    accessorKey: "fotografoNombre",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Nombre fotografo
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "nombreFoto",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Nombre foto
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },

  // Dentro de tu definición de columnas:
  {
    accessorKey: "url",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left"
      >
        Imagen
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const url = getValue() as string;

      return (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Image
              src={url}
              alt="Foto"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-md border shadow-sm cursor-pointer"
            />
          </HoverCardTrigger>
          <HoverCardContent
            side="right"
            align="start"
            className="w-auto p-2 bg-white border rounded-md shadow-lg"
          >
            <Image
              src={url}
              alt="Vista ampliada"
              width={200}
              height={200}
              className="w-48 h-48 object-cover rounded-md"
            />
          </HoverCardContent>
        </HoverCard>
      );
    },
  },



  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const fotografos = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <Link href={`/fotografos/${fotografos.fotografoId}/galeria/${fotografos.id}/edit`}>
              <DropdownMenuItem>Editar</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
