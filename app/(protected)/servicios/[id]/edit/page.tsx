import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { getPhotoServiceById } from "../../actions";
import { getCategoriasActivas } from "@/app/(protected)/categorias/actions";
import { ServicioFormulario } from "../../components/Form";


export default async function Edit({ params }: { params: { id: string } }) {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("editar_servicios")) {
    return <NoAcceso />;
  }

  const servicio = await getPhotoServiceById(params.id);
  if (!servicio) {
    redirect("/servicios");
  }

  const categorias = await getCategoriasActivas();

  // Mapear initialData para el formulario con los datos que necesitas
  const initialData = {
    id: servicio.id,
    name: servicio.name ?? "",
    img: servicio.img ?? "",
    description: servicio.description ?? "",
    categoryId: servicio.categoryId ?? "",
    categoriaNombre: servicio.categoriaNombre ?? "",
    activo: servicio.activo ?? true,
  };

  return (
    <div>
      <HeaderComponent
        Icon={Pencil}
        description="En este apartado podrás editar un servicio"
        screenName="Editar Servicio"
      />
      <ServicioFormulario
        isUpdate={true}
        initialData={initialData}
        categorias={categorias}
      />
    </div>
  );
}
