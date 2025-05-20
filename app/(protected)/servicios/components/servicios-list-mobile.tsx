"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PhotoService } from "../type";

interface ServiceListMobileProps {
  servicios: PhotoService[];
}

export default function ServiceListMobile({ servicios }: ServiceListMobileProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServicios = servicios.filter((servicio) =>
    servicio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    servicio.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    servicio.categoriaNombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Botón para crear un nuevo servicio */}
      <Link href="/estado-servicio/create">
        <Button className="w-full flex items-center gap-2">
          Nuevo servicio
          <Plus />
        </Button>
      </Link>

      {/* Input de búsqueda */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar servicio..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Listado de servicios */}
      {filteredServicios.map((servicio) => (
        <div key={servicio.id} className="flex items-center justify-between p-4 rounded-lg shadow border">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <span
                className={`w-2 h-2 rounded-full mr-2 ${servicio.activo ? "bg-green-500" : "bg-red-500"}`}
              ></span>
              <h3 className="text-sm font-medium truncate">{servicio.name}</h3>
            </div>
            <p className="text-xs mt-1 truncate">Descripción: {servicio.description}</p>
            <p className="text-xs mt-1 truncate">Categoría: {servicio.categoriaNombre ?? "Sin categoría"}</p>
          </div>
          <div className="flex items-center ml-4">
            <Link href={`/estado-servicio/${servicio.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {filteredServicios.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron servicios.</p>
      )}
      {filteredServicios.length > 0 && (
        <p className="text-sm text-muted-foreground text-center">
          Mostrando {filteredServicios.length} de {servicios.length} servicios
        </p>
      )}
    </div>
  );
}
