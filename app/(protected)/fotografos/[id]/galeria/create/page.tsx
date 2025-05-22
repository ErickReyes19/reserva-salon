// app/(protected)/fotografos/[id]/galeria/create/page.tsx
import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { PlusCircle } from "lucide-react";
import { Galeria } from "../type";
import { GaleriaFormulario } from "../components/Form";

export default async function CreateGaleriaPage() {
  const permisos = await getSessionPermisos();
  if (!permisos?.includes("crear_foto")) {
    return <NoAcceso />;
  }

  // Valores iniciales vacíos para el formulario
  const initialData: Galeria = {
    id: "",
    nombreFoto: "",
    url: "",
    fotografoId: "",
    fotografoNombre: "",
  };

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={PlusCircle}
        description="En este apartado podrás agregar una nueva imagen a la galería"
        screenName="Galería"
      />
      <GaleriaFormulario isUpdate={false} initialData={initialData} />
    </div>
  );
}
