import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { PlusCircle } from "lucide-react";
import { CategoriaFormulario } from "../components/Form";

export default async function Create() {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("crear_categoria")) {
    return <NoAcceso />;
  }

  const initialData = {
    name: "",
    activo: true,
  };

  return (
    <div>
      <HeaderComponent
        Icon={PlusCircle}
        description="En este apartado podrá crear una nueva categoría que se mostrará en la página de inicio."
        screenName="Crear categoría"
      />
      <CategoriaFormulario
        isUpdate={false}
        initialData={initialData}
      />
    </div>
  );
}
