/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GalleryVertical, Image, Pencil, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Fotografo } from "../type";

interface FotografoListMobileProps {
  fotografos: Fotografo[];
}

export default function FotografoListMobile({ fotografos }: FotografoListMobileProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFotografos = fotografos.filter((fotografo) =>
    fotografo.usuarioNombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fotografo.telefono.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fotografo.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Botón para crear un nuevo fotógrafo */}
      <Link href="/estado-servicio/create">
        <Button className="w-full flex items-center gap-2">
          Nuevo fotógrafo
          <Plus />
        </Button>
      </Link>

      {/* Input de búsqueda */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar fotógrafo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Listado de fotógrafos */}
      {filteredFotografos.map((fotografo) => (
        <div key={fotografo.id} className="flex items-center justify-between p-4 rounded-lg shadow border">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  fotografo.disponible ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              <h3 className="text-sm font-medium truncate">{fotografo.usuarioNombre}</h3>
            </div>
            <p className="text-xs mt-1 truncate">Teléfono: {fotografo.telefono}</p>
            <p className="text-xs mt-1 truncate">Bio: {fotografo.bio}</p>
          </div>
          <div className="flex items-center ml-4">
            <Link href={`/fotografos/${fotografo.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={`/fotografos/${fotografo.id}/galeria`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Image className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {filteredFotografos.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron fotógrafos.</p>
      )}
      {filteredFotografos.length > 0 && (
        <p className="text-sm text-muted-foreground text-center">
          Mostrando {filteredFotografos.length} de {fotografos.length} fotógrafos
        </p>
      )}
    </div>
  );
}
