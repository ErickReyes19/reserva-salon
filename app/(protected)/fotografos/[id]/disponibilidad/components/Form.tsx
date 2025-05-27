"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

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
                        field.onChange(`${e.target.value}T00:00:00.000Z`)
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
                        field.onChange(`${e.target.value}T00:00:00.000Z`)
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
            name="recurring"
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
