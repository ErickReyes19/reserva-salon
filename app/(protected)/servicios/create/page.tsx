import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { PlusCircle } from "lucide-react";
import { getCategoriasActivas } from "../../categorias/actions";
import { ServicioFormulario } from "../components/Form";

export default async function Create() {



  const permisos = await getSessionPermisos();
  if (!permisos?.includes("crear_usuario")) {
    return <NoAcceso />;
  }

  const initialData = {
    name: "",
    img: "",
    description: "",
    categoryId: "",
    categoriaNombre: "",
    activo: true,
  };
  const categorias = await getCategoriasActivas();

  return (
    <div>
      <HeaderComponent
        Icon={PlusCircle}
        description="En este apartado podrás crear un nuevo usuario"
        screenName="Usuarios"
      />
      <ServicioFormulario isUpdate={false}  initialData={initialData} categorias={categorias} />
    </div>
  );
}
