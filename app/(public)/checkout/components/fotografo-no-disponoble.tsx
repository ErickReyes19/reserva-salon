// components/FotografoNoDisponible.tsx
"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";

interface FotografoNoDisponibleProps {
  dateFormatted: string;
  hora: string;
  fotografoName: string;
  onBack: () => void;
}

export function FotografoNoDisponible({
  dateFormatted,
  hora,
  fotografoName,
  onBack,
}: FotografoNoDisponibleProps) {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-0 shadow-lg">
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Fotógrafo No Disponible</h2>
          <AlertTriangle className="h-7 w-7" />
        </div>
        <p className="text-red-100 text-sm">
          Lo sentimos, el fotógrafo <strong>{fotografoName}</strong> no está disponible el <strong>{dateFormatted}</strong> a las <strong>{hora}</strong>.
        </p>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="rounded-full bg-red-100 p-3 mb-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
          <h3 className="text-xl font-medium mb-4 text-center">
            Por favor, elige otra fecha u otro fotógrafo.
          </h3>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t">
        <div className="w-full flex justify-center">
          <Button onClick={onBack} className="bg-red-600 hover:bg-red-700 gap-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}