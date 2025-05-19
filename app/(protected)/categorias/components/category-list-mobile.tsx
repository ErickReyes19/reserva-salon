"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Category } from "../types";

interface CategoriaListProps {
  categorias: Category[];
}

export default function CategoriaListMobile({ categorias }: CategoriaListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategorias = categorias.filter((categoria) =>
    categoria.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Link href={`/categorias/create`} className="w-full md:w-auto">
        <Button className="w-full md:w-auto flex items-center gap-2">
          Nueva categoría
          <Plus />
        </Button>
      </Link>

      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {filteredCategorias.map((categoria) => (
        <div
          key={categoria.id}
          className="flex items-center justify-between p-4 rounded-lg shadow border"
        >
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold truncate">
              {categoria.name}
            </h3>
            <Badge variant={categoria.activo ? "default" : "destructive"}>
              {categoria.activo ? "Activo" : "Inactivo"}
            </Badge>
          </div>
          <div className="flex items-center ml-4">
            <Link href={`/categorias/${categoria.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {filteredCategorias.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron categorías.</p>
      )}
    </div>
  );
}
