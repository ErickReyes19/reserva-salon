import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { PlusCircle } from "lucide-react";
import { getCategoriasActivas } from "../../categorias/actions";
import { ServicioFormulario } from "../components/Form";
import { getFotografos } from "../../fotografos/actions";

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
    precio: 0,
  };
  const categorias = await getCategoriasActivas();
  const fotografos = await getFotografos();

  return (
    <div>
      <HeaderComponent
        Icon={PlusCircle}
        description="En este apartado podrás crear un nuevo usuario"
        screenName="Usuarios"
      />
      <ServicioFormulario fotografos={fotografos} isUpdate={false}  initialData={initialData} categorias={categorias} />
    </div>
  );
}
