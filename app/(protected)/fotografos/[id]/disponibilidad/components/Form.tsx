"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { UnavailabilitySchema } from "../schema";
import { Unavailability } from "../type";
import { postUnavailability, putUnavailability } from "../actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { z } from "zod";

export function DisponibilidadForm({
  isUpdate,
  initialData,
}: {
  isUpdate: boolean;
  initialData: Unavailability;
}) {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const fotografoId = params.id as string;

  const form = useForm<z.infer<typeof UnavailabilitySchema>>({
    resolver: zodResolver(UnavailabilitySchema),
    defaultValues: initialData,
  });

  const recurring = form.watch("recurring");
  const weekday = form.watch("weekday");
  const startDate = form.watch("startDate");
  const endDate = form.watch("endDate");
  const exceptions = form.watch("exceptions") || [];

  const [exceptionDate, setExceptionDate] = useState<Date | null>(new Date());
  const [exceptionDisponible, setExceptionDisponible] = useState(true);
  const [exceptionError, setExceptionError] = useState("");



  // Función para validar si una fecha es válida para excepción
  function isValidExceptionDate(date: Date): { valid: boolean; message: string } {
    if (!date) return { valid: false, message: "Selecciona una fecha" };

    // Crear la fecha de manera más robusta para evitar problemas de zona horaria
    const selectedDate = new Date(date);
    const selectedWeekday = selectedDate.getDay();

    if (recurring) {
      // Si es recurrente, solo permite fechas del día de la semana seleccionado
      if (weekday === undefined) {
        return { valid: false, message: "Primero selecciona un día de la semana" };
      }
      
      // Debug: agregar console.log para verificar los valores
      console.log('Debug - weekday del form:', weekday, 'selectedWeekday:', selectedWeekday, 'date:', date);
      
      if (selectedWeekday !== weekday) {
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return { 
          valid: false, 
          message: `Solo puedes agregar excepciones para ${diasSemana[weekday]}s (seleccionaste un ${diasSemana[selectedWeekday]})` 
        };
      }
    } else {
      // Si es por rango, solo permite fechas dentro del rango
      if (!startDate || !endDate) {
        return { valid: false, message: "Primero define el rango de fechas" };
      }
      
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (selectedDate < start || selectedDate > end) {
        return { 
          valid: false, 
          message: `La fecha debe estar entre ${format(start, "d/M/yyyy", { locale: es })} y ${format(end, "d/M/yyyy", { locale: es })}` 
        };
      }
    }

    // Verificar que no sea una fecha duplicada
    if (exceptions.some(e => e.date === date.toISOString().split('T')[0])) {
      return { valid: false, message: "Ya existe una excepción para esta fecha" };
    }

    return { valid: true, message: "" };
  }

  function addException() {
    if (!exceptionDate) {
      setExceptionError("Selecciona una fecha");
      return;
    }
    
    const validation = isValidExceptionDate(exceptionDate);
    if (!validation.valid) {
      setExceptionError(validation.message);
      return;
    }

    form.setValue("exceptions", [
      ...exceptions,
      { date: exceptionDate.toISOString().split('T')[0], disponible: exceptionDisponible },
    ]);
    setExceptionDate(null);
    setExceptionDisponible(true);
    setExceptionError("");
  }

  function removeException(date: string) {
    form.setValue("exceptions", exceptions.filter((e) => e.date !== date));
  }

  // Limpiar error cuando cambia la fecha
  function handleExceptionDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExceptionDate(new Date(e.target.value));
    setExceptionError("");
  }

  async function onSubmit(values: z.infer<typeof UnavailabilitySchema>) {
    try {
      const payload: Unavailability = {
        ...values,
        id: values.id,
        fotografoId,
      };

      const result = isUpdate
        ? await putUnavailability({ rule: payload })
        : await postUnavailability({ rule: payload });

      if (!result) throw new Error("No se pudo guardar la regla");

      toast({
        title: isUpdate ? "Regla actualizada" : "Regla creada",
        description: isUpdate
          ? "La disponibilidad se actualizó correctamente."
          : "La disponibilidad se creó correctamente.",
      });

      router.push(`/fotografos/${fotografoId}/disponibilidad`);
      router.refresh();
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Falló la operación." });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 border rounded-md p-6">
        {/* Recurring */}
        <FormField
          control={form.control}
          name="recurring"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3">
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Recurrente semanal</FormLabel>
            </FormItem>
          )}
        />
        <FormMessage />

        {/* Si es recurrente: weekday */}
        {recurring && (
          <FormField
            control={form.control}
            name="weekday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Día de la semana</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(val) => field.onChange(parseInt(val, 10))}
                    value={field.value?.toString()}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un día" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Domingo</SelectItem>
                      <SelectItem value="1">Lunes</SelectItem>
                      <SelectItem value="2">Martes</SelectItem>
                      <SelectItem value="3">Miércoles</SelectItem>
                      <SelectItem value="4">Jueves</SelectItem>
                      <SelectItem value="5">Viernes</SelectItem>
                      <SelectItem value="6">Sábado</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Si no es recurrente: rango de fechas */}
        {!recurring && (
          <>
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha inicio</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={field.value?.slice(0, 10) ?? ""}
                      onChange={(e) =>
                        field.onChange(e.target.value)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha fin</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={field.value?.slice(0, 10) ?? ""}
                      onChange={(e) =>
                        field.onChange(e.target.value)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* Activo */}
        {isUpdate && (
          <FormField
            control={form.control}
            name="activo"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3">
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Activo</FormLabel>
              </FormItem>
            )}
          />
        )}

        {/* Excepciones */}
        <div>
          <label className="block font-medium mb-1">
            Excepciones (días específicos)
            {recurring && weekday !== undefined && (
              <span className="text-xs text-muted-foreground ml-2">
                Solo puedes agregar excepciones para {["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][weekday]}s
              </span>
            )}
            {!recurring && startDate && endDate && (
              <span className="text-xs text-muted-foreground ml-2">
                Solo puedes agregar excepciones entre {format(parseISO(startDate), "d/M/yyyy", { locale: es })} y {format(parseISO(endDate), "d/M/yyyy", { locale: es })}
              </span>
            )}
          </label>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant={"outline"}
                  className={cn(
                    "w-auto px-2 py-1 text-xs",
                    !exceptionDate && "text-muted-foreground",
                    exceptionError && "border-red-500"
                  )}
                >
                  {exceptionDate ? (
                    format(exceptionDate, "EEEE, d MMMM", { locale: es })
                  ) : (
                    <CalendarIcon className="mr-2 h-4 w-4" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={exceptionDate || undefined}
                  onSelect={(date) => {
                    setExceptionDate(date || null);
                    setExceptionError("");
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <label className="flex items-center gap-1 text-xs">
              <input
                type="checkbox"
                checked={exceptionDisponible}
                onChange={(e) => setExceptionDisponible(e.target.checked)}
              />
              Disponible ese día
            </label>
            <Button 
              type="button" 
              onClick={addException} 
              size="sm"
              disabled={!exceptionDate || (recurring ? weekday === undefined : !startDate || !endDate)}
            >
              Agregar
            </Button>
          </div>
          {exceptionError && (
            <p className="text-sm text-red-500 mt-1">{exceptionError}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {exceptions.map((e) => (
              <span 
                key={e.date} 
                className={`flex items-center rounded px-2 py-1 text-xs ${
                  e.disponible 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {e.date} — {e.disponible ? "Disponible" : "No disponible"}
                <button
                  type="button"
                  className="ml-2 text-gray-500 hover:text-red-500"
                  onClick={() => removeException(e.date)}
                  title="Eliminar"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <FormMessage />

        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting
              ? isUpdate
                ? "Actualizando..."
                : "Creando..."
              : isUpdate
                ? "Actualizar"
                : "Crear"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
