import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { ListCheck, User } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { getFotografos } from "./actions";
import { Fotografo } from "./type";
import FotografoListMobile from "./components/fotografos-list-mobile";

export default async function EstadoServicio() {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_fotografos")) {
    return <NoAcceso />;
  }

  const data: Fotografo[] = await getFotografos();

  return (
    <div className="container mx-auto py-2">
      <HeaderComponent
        Icon={User}
        description="En este apartado podrá ver todos los fotografos disponibles."
        screenName="Fotografos"
      />
      <div className="hidden md:block">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="block md:hidden">
        <FotografoListMobile fotografos={data} />
      </div>
    </div>
  );
}
