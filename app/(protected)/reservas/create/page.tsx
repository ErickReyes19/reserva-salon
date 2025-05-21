import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { PlusCircle } from "lucide-react";
import { getUsuarios } from "../../usuarios/actions";
import { FotografoFormulario } from "../../fotografos/components/Form";

export default async function CreateFotografoPage() {
  const permisos = await getSessionPermisos();
  if (!permisos?.includes("crear_fotografos")) {
    return <NoAcceso />;
  }

  const usuarios = await getUsuarios();

  const initialData = {
    id: "",
    usuarioId: "",
    telefono: "",
    bio: "",
    url: "",
    Foto: "",
    disponible: true,
    nombre: "",
    usuarioNombre: "",
  };

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={PlusCircle}
        description="En este apartado podrás crear un nuevo fotógrafo"
        screenName="Fotógrafos"
      />
      <FotografoFormulario
        isUpdate={false}
        initialData={initialData}
        usuarios={usuarios}
      />
    </div>
  );
}
