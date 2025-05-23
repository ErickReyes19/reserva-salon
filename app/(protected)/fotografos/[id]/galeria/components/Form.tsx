"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { randomUUID } from "crypto";
import { useToast } from "@/hooks/use-toast";

import { GaleriaSchema, Galeria } from "../schema";
import { postGaleria, putGaleria } from "../actions";
import { useParams } from "next/navigation";
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
import { useEffect, useState } from "react";

interface GaleriaFormularioProps {
  isUpdate: boolean;
  initialData: Galeria;
}

export function GaleriaFormulario({
  isUpdate,
  initialData,
}: GaleriaFormularioProps) {
  const { toast } = useToast();
  const router = useRouter();

  const params = useParams();
  const fotografoId = params.id as string;
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof GaleriaSchema>>({
    resolver: zodResolver(GaleriaSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (isUpdate && initialData.url) {
      setPreview(initialData.url);
    }
  }, [isUpdate, initialData.url]);

  async function uploadFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Error al subir imagen");
    }

    const data = await res.json();
    return data.url;
  }

  async function onSubmit(values: z.infer<typeof GaleriaSchema>) {
    try {
      let url = values.url;
      if (file) {
        url = await uploadFile(file);
      }

      const galeriaData: Galeria = {
        ...values,
        id: values.id,
        fotografoId,
        url,
      };

      const result = isUpdate
        ? await putGaleria({ galeria: galeriaData })
        : await postGaleria({ galeria: galeriaData });

      if (!result) {
        throw new Error("No se pudo guardar la imagen");
      }

      toast({
        title: isUpdate ? "Imagen actualizada" : "Imagen creada",
        description: isUpdate
          ? "La galería fue actualizada correctamente."
          : "La imagen fue agregada correctamente.",
      });

      router.push(`/fotografos/${fotografoId}/galeria`);
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast({ title: "Error", description: error.message || "Falló la operación." });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 border rounded-md p-6">
        <FormField
          control={form.control}
          name="nombreFoto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Foto</FormLabel>
              <FormControl>
                <Input placeholder="Ej. Retrato en estudio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const selected = e.target.files[0];
                      setFile(selected);
                      field.onChange("placeholder"); // para evitar que zod lo marque como vacío
                      setPreview(URL.createObjectURL(selected));
                    }
                  }}
                />
              </FormControl>
              {preview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview}
                  alt="Vista previa"
                  className="mt-2 max-h-48 rounded object-contain"
                />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

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
