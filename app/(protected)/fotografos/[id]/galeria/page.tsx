import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Image as ImageIcon } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Galeria } from "./type";
import { getGalerias } from "./actions";
import GaleriaListMobile from "./components/fotografos-list-mobile";

export default async function GaleriaPage({ params }: { params: { id: string } }) {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_galeria")) {
    return <NoAcceso />;
  }

  const data: Galeria[] = await getGalerias();

  return (
    <div className="container mx-auto py-2">
      <HeaderComponent
        Icon={ImageIcon}
        description="En este apartado podrá ver todas las fotos subidas por los fotógrafos."
        screenName="Galería"
      />
      <div className="hidden md:block">
        <DataTable fotografoId={params.id} columns={columns} data={data} />
      </div>
      <div className="block md:hidden">
        <GaleriaListMobile galerias={data} />
      </div>
    </div>
  );
}
