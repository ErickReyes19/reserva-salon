// app/fotografos/[id]/disponibilidad/page.tsx

import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Calendar as CalendarIcon } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { getUnavailabilitiesByFotografoId } from "./actions";
import { Unavailability } from "./type";
import DisponibilidadListMobile from "./components/fotografos-list-mobile";

interface PageProps {
  params: { id: string };
}

export default async function disponibilidadPage({ params }: PageProps) {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_disponibilidad")) {
    return <NoAcceso />;
  }

  // Trae sólo las indisponibilidad de este fotógrafo
  const data: Unavailability[] = await getUnavailabilitiesByFotografoId(params.id);

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={CalendarIcon}
        description="Aquí puedes ver y gestionar las indisponibilidad del fotógrafo."
        screenName="disponibilidad"
      />

      {/* Versión de escritorio */}
      <div className="hidden md:block">
        <DataTable
          fotografoId={params.id}
          columns={columns}
          data={data}
        />
      </div>

      {/* Versión móvil */}
      <div className="block md:hidden">
        <DisponibilidadListMobile disponibilidad={data} />
      </div>
    </div>
  );
}
