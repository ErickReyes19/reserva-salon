/* eslint-disable @next/next/no-img-element */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { putPhotoService, postPhotoService } from "../actions";
import { PhotoService, PhotoServiceSchema } from "../schema";
import { Category } from "../../categorias/types";
import { z } from "zod";
import { useEffect, useState } from "react";

export function ServicioFormulario({
  isUpdate,
  initialData,
  categorias,
}: {
  isUpdate: boolean;
  initialData: PhotoService;
  categorias: Category[];
}) {
  const { toast } = useToast();
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isUpdate && initialData.img) {
      setPreview(initialData.img);
    }
  }, [isUpdate, initialData.img]);

  const form = useForm<z.infer<typeof PhotoServiceSchema>>({
    resolver: zodResolver(PhotoServiceSchema),
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
    return data.url; // La url retornada, ej: /uploads/uuid.ext
  }

  async function onSubmit(data: z.infer<typeof PhotoServiceSchema>) {
    try {
      let imgUrl = data.img;

      if (file) {
        imgUrl = await uploadFile(file);
      }

      const serviceData = { ...data, img: imgUrl };

      if (isUpdate) {
        await putPhotoService({ servicio: serviceData });
      } else {
        await postPhotoService({ servicio: serviceData });
      }

      toast({
        title: isUpdate ? "Actualización Exitosa" : "Creación Exitosa",
        description: isUpdate
          ? "El servicio ha sido actualizado."
          : "El servicio ha sido creado.",
      });

      router.push("/servicios");
      router.refresh();
    } catch (error) {
      console.error("Error en operación:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar la solicitud.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border rounded-md p-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del servicio" {...field} />
                </FormControl>
                <FormDescription>
                  Ingresa el nombre del servicio fotográfico.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*"
                    className="file-input file-input-bordered w-full"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const selectedFile = e.target.files[0];
                        setFile(selectedFile); // guarda el file

                        // Actualiza campo img con un string temporal para pasar la validación Zod
                        field.onChange("placeholder");

                        // Genera URL temporal para preview
                        const previewUrl = URL.createObjectURL(selectedFile);
                        setPreview(previewUrl);
                      }
                    }}
                  />
                </FormControl>

                {preview && (
                  <img
                    src={preview}
                    alt="Vista previa"
                    className="mt-2 max-h-48 rounded object-contain"
                  />
                )}

                <FormDescription>
                  Sube una imagen para representar el servicio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />




        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe brevemente el servicio" {...field} />
              </FormControl>
              <FormDescription>
                Esta descripción se mostrará al usuario.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoría</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria.id} value={categoria.id || ""}>
                        {categoria.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isUpdate && (
          <FormField
            control={form.control}
            name="activo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value === "true")}
                    defaultValue={field.value ? "true" : "false"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Activo</SelectItem>
                      <SelectItem value="false">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Define si el servicio está activo o no.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Guardando...
              </>
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
