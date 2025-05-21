import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { getUsuarios } from "@/app/(protected)/usuarios/actions";
import { FotografoFormulario } from "@/app/(protected)/fotografos/components/Form";
import { getFotografoById } from "@/app/(protected)/fotografos/actions";

export default async function EditFotografoPage({ params }: { params: { id: string } }) {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("editar_fotografos")) {
    return <NoAcceso />;
  }

  const fotografo = await getFotografoById(params.id);
  if (!fotografo) {
    redirect("/fotografos");
  }

  const usuarios = await getUsuarios();

  const initialData = {
    id: fotografo.id,
    usuarioId: fotografo.usuarioId,
    telefono: fotografo.telefono || "",
    bio: fotografo.bio || "",
    nombre: fotografo.nombre,
    url: fotografo.url || "",
    Foto: fotografo.Foto || "",
    disponible: fotografo.disponible,
    usuarioNombre: fotografo.usuarioNombre || "",
  };

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={Pencil}
        description="En este apartado podrás editar un fotógrafo"
        screenName="Editar Fotógrafo"
      />
      <FotografoFormulario
        isUpdate={true}
        initialData={initialData}
        usuarios={usuarios}
      />
    </div>
  );
}
