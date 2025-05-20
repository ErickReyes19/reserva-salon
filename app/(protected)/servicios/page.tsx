import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { ListCheck } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import ServiceListMobile from "./components/servicios-list-mobile"; // Este componente lo podés crear como el de usuarios pero para servicios
import { getPhotoServices } from "./actions";

export default async function EstadoServicio() {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_servicios")) {
    return <NoAcceso />;
  }

  const data = await getPhotoServices();

  return (
    <div className="container mx-auto py-2">
      <HeaderComponent
        Icon={ListCheck}
        description="En este apartado podrá ver todos los servicios fotográficos disponibles."
        screenName="Servicios fotográficos"
      />
      <div className="hidden md:block">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="block md:hidden">
        <ServiceListMobile servicios={data} />
      </div>
    </div>
  );
}
