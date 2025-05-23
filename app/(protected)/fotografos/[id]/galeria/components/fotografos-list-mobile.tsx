"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Search, GalleryThumbnails, ImageIcon } from "lucide-react";
import { Galeria } from "../type";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

interface GaleriaListMobileProps {
  galerias: Galeria[];
}

export default function GaleriaListMobile({ galerias }: GaleriaListMobileProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = galerias.filter((g) =>
    g.nombreFoto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Botón para crear nueva imagen */}
      <Link href="./create">
        <Button className="w-full flex items-center justify-center gap-2">
          <Plus /> Agregar Foto
        </Button>
      </Link>

      {/* Buscador */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar foto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Listado */}
      {filtered.map((foto) => (
        <div
          key={foto.id}
          className="flex items-center justify-between p-3 border rounded-lg shadow"
        >
          <div className="flex items-center gap-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="relative w-12 h-12 rounded overflow-hidden cursor-pointer">
                  <Image
                    src={foto.url}
                    alt={foto.nombreFoto}
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                align="start"
                className="w-auto p-2 bg-white border rounded-md shadow-lg"
              >
                <Image
                  src={foto.url}
                  alt={`Ampliación de ${foto.nombreFoto}`}
                  width={200}
                  height={200}
                  className="object-cover rounded-md"
                />
              </HoverCardContent>
            </HoverCard>

            <div className="min-w-0">
              <p className="font-medium truncate">{foto.nombreFoto}</p>
              <p className="font-medium truncate">{foto.fotografoNombre || ""}</p>
            </div>
          </div>

          <div>
            <Link href={`./${foto.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron fotos.</p>
      )}

      {filtered.length > 0 && (
        <p className="text-sm text-center text-muted-foreground">
          Mostrando {filtered.length} de {galerias.length} fotos
        </p>
      )}
    </div>
  );
}
