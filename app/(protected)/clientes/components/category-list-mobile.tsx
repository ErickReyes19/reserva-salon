"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Pencil, Phone, Plus, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Cliente } from "../types";

interface ClienteListProps {
  cliente: Cliente[];
}

export default function ClienteListMobile({ cliente }: ClienteListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClientes = cliente.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.telefono.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar cliente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {filteredClientes.map((cliente) => (
        <div
          key={cliente.id}
          className="flex items-center justify-between p-4 rounded-lg shadow border"
        >
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-base font-semibold truncate">
                {cliente.nombre}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-base font-semibold truncate">
                {cliente.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-base font-semibold truncate">
                {cliente.telefono}
              </span>
            </div>
          </div>
          <div className="flex items-center ml-4">
            <Link href={`/clientes/${cliente.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {filteredClientes.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron clientes.</p>
      )}
    </div>
  );
}
