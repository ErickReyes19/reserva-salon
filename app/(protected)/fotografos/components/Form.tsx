/* eslint-disable @next/next/no-img-element */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { randomUUID } from "crypto";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { FotografoSchema, Fotografo } from "../schema";
import { getFotografos, postFotografo, putFotografo } from "../actions";
import { Usuario } from "../../usuarios/type";
import { z } from "zod";

interface FotografoFormProps {
  isUpdate: boolean;
  initialData: Fotografo;
  usuarios: Usuario[];
}

export function FotografoFormulario({ isUpdate, initialData, usuarios }: FotografoFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // Si se actualiza, mostrar la imagen existente
  useEffect(() => {
    if (isUpdate && initialData.Foto) {
      setPreview(initialData.Foto);
    }
  }, [isUpdate, initialData.Foto]);

  const form = useForm<z.infer<typeof FotografoSchema>>({
    resolver: zodResolver(FotografoSchema),
    defaultValues: initialData,
  });

  async function uploadFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Error al subir archivo");
    }

    const data = await res.json();
    return data.url;
  }

  async function onSubmit(data: z.infer<typeof FotografoSchema>) {
    try {
      let fotoUrl = data.Foto;
      if (file) {
        fotoUrl = await uploadFile(file);
      }

      const formData: Fotografo = { ...data, Foto: fotoUrl };
      if (!formData.id) formData.id = randomUUID();

      if (isUpdate) {
        await putFotografo({ fotografo: formData });
      } else {
        await postFotografo({ fotografo: formData });
      }

      toast({
        title: isUpdate ? "Fotógrafo actualizado" : "Fotógrafo creado",
        description: isUpdate
          ? "Los datos del fotógrafo se han actualizado correctamente."
          : "Nuevo fotógrafo agregado exitosamente.",
      });

      router.push("/fotografos");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "No se pudo procesar la solicitud." });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border rounded-md p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="usuarioId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un usuario" />
                    </SelectTrigger>
                    <SelectContent>
                      {usuarios.map((u) => (
                        <SelectItem key={u.id} value={u.id || ""}>
                          {u.usuario}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Asocia un usuario al fotógrafo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Foto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Foto</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*"
                    className="file-input file-input-bordered w-full"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        const selected = e.target.files[0];
                        setFile(selected);
                        field.onChange("placeholder");
                        setPreview(URL.createObjectURL(selected));
                      }
                    }}
                  />
                </FormControl>
                {preview && <img src={preview} alt="Vista previa" className="mt-2 max-h-48 rounded object-contain" />}
                <FormDescription>Sube la foto del fotógrafo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="Número de teléfono" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del fotografo" {...field} />
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
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="Sitio web o portafolio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biografía</FormLabel>
              <FormControl>
                <Textarea placeholder="Biografía breve" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="disponible"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <FormLabel className="mr-4">Disponible</FormLabel>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Guardando...</>
            ) : isUpdate ? (
              "Actualizar"
            ) : (
              "Crear"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
