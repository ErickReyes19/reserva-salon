"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Controller, Control } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fotografo } from "../../fotografos/type";


interface FotografoSelectorProps {
  control: Control<any>;
  name: string;
  fotografos: Fotografo[];
}

export function FotografoSelector({
  control,
  name,
  fotografos,
}: FotografoSelectorProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const selectedIds: string[] = field.value || [];

        const toggleId = (id: string) => {
          const updated = selectedIds.includes(id)
            ? selectedIds.filter((f) => f !== id)
            : [...selectedIds, id];
          field.onChange(updated);
        };

        return (
          <FormItem>
            <FormLabel>Fotógrafos</FormLabel>
            <FormControl>
              <div>
                <Select onValueChange={toggleId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona fotógrafos" />
                  </SelectTrigger>
                  <SelectContent>
                    {fotografos.map((fotografo) => (
                      <SelectItem
                        key={fotografo.id}
                        value={fotografo.id || ""}
                        className={cn(
                          selectedIds.includes(fotografo.id! ) && "font-semibold"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          {fotografo.nombre}
                          {selectedIds.includes(fotografo.id!) && (
                            <X className="h-4 w-4 text-muted-foreground ml-2" />
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Badges de seleccionados */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedIds.map((id) => {
                    const f = fotografos.find((f) => f.id === id);
                    return (
                      <Badge
                        key={id}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {f?.nombre}
                        <X
                          className="h-3 w-3 cursor-pointer ml-1"
                          onClick={() => toggleId(id)}
                        />
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </FormControl>
            <FormDescription>
              Selecciona uno o más fotógrafos para este servicio.
            </FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
