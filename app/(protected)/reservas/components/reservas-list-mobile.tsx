"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, CheckCircle, XCircle, Search, Pencil, Camera } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Reserva } from "../type";

interface ReservaListMobileProps {
  reservas: Reserva[];
}

export default function ReservaListMobile({ reservas }: ReservaListMobileProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = reservas.filter((res) =>
    res.clienteNombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    res.fotografoNombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    res.estado.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Búsqueda */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar reserva..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Lista de reservas */}
      {filtered.map((res) => {
        const date = new Date(res.fecha);
        return (
          <div key={`${res.fotografoId}-${res.horaInicio}`} className="flex items-start justify-between p-4 rounded-lg shadow border">
            <div className="flex-1 min-w-0 space-y-1">
              {/* Fecha */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium truncate">
                  {format(date, "dd 'de' MMMM yyyy", { locale: es })}
                </span>
              </div>
              {/* Hora */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm truncate">
                  {format(new Date(res.horaInicio), "HH:mm")} - {format(new Date(res.horaFin), "HH:mm")}
                </span>
              </div>
              {/* Cliente */}
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm truncate">{res.clienteNombre}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-gray-600" />
                <span className="text-sm truncate">{res.fotografoNombre}</span>
              </div>
              {/* Estado */}
              <div className="flex items-center gap-2">
                {res.estado === true ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm capitalize">{res.estado}</span>
              </div>
            </div>

            {/* Acción editar */}
            <div className="flex items-center ml-4">
              <Link href={`/reservas/${res.fotografoId}/edit`}>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Pencil className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron reservas.</p>
      )}
      {filtered.length > 0 && (
        <p className="text-sm text-muted-foreground text-center">
          Mostrando {filtered.length} de {reservas.length} reservas
        </p>
      )}
    </div>
  );
}
