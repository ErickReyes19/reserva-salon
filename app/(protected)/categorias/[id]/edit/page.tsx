
import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { getCategoriaById } from "../../actions";
import { CategoriaFormulario } from "../../components/Form";

export default async function Edit({ params }: { params: { id: string } }) {
  // Verificar si hay una sesión activa

  const permisos = await getSessionPermisos();

  if (!permisos?.includes("editar_categoria")) {
    return <NoAcceso />;
  }

  // Obtener el cliente por su ID
  const categoria = await getCategoriaById(params.id);
  if (!categoria) {
    redirect("/categorias"); // Redirige si no se encuentra el cliente
  }
  const categoriaCreate = {
    id: categoria.id,
    name: categoria.name,
    activo: categoria.activo,
  };


  return (
    <div>
      <HeaderComponent
        Icon={Pencil}
        description="En este apartado podrá editar un puesto."
        screenName="Editar Puesto"
      />
      <CategoriaFormulario
        isUpdate={true}
        initialData={categoriaCreate} // Pasamos los datos del cliente al formulario
      />
    </div>
  );
}
