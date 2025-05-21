import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { CalendarCheck, ListCheck, User } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { getReservas } from "./actions";
import { Reserva } from "./type";
import ReservaListMobile from "./components/reservas-list-mobile";

export default async function EstadoReservas() {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_reservas")) {
    return <NoAcceso />;
  }

  const data: Reserva[] = await getReservas();

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={CalendarCheck}
        description="En este apartado podrás ver todas las reservas programadas."
        screenName="Reservas"
      />

      <div className="hidden md:block">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="block md:hidden">
        <ReservaListMobile reservas={data} />
      </div>
    </div>
  );
}
