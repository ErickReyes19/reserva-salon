import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { getGaleriaById } from "../../actions";
import { GaleriaFormulario } from "../../components/Form";

export default async function EditFotoPage({ params }: { params: { idFoto: string } }) {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("editar_fotos")) {
    return <NoAcceso />;
  }

  const foto = await getGaleriaById(params.idFoto);
  if (!foto) {
    redirect("/fotografos");
  }

  const initialData = {
    id: foto.id,
    nombreFoto: foto.nombreFoto,
    url: foto.url,
    fotografoId: foto.fotografoId,
    fotografoNombre: foto.fotografoNombre || "",
  };

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={Pencil}
        description="En este apartado podrás editar una foto de la galería"
        screenName="Editar Foto"
      />
      <GaleriaFormulario
        isUpdate={true}
        initialData={initialData}
      />
    </div>
  );
}
