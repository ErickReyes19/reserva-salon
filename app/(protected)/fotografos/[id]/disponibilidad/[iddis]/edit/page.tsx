// app/(protected)/fotografos/[id]/disponibilidad/[idbis]/edit/page.tsx

import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { getUnavailabilityById } from "../../actions";
import { DisponibilidadForm } from "../../components/Form";

interface EditDisponibilidadPageProps {
  params: {
    id: string;      // fotógrafoId
    iddis: string;   // disponibilidadId
  };
}

export default async function EditDisponibilidadPage({
  params,
}: EditDisponibilidadPageProps) {
  const { id: fotografoId, iddis } = params;
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("editar_disponibilidad")) {
    return <NoAcceso />;
  }
  
  const rule = await getUnavailabilityById(iddis);
  if (!rule || rule.fotografoId !== fotografoId) {
    redirect(`/fotografos/${fotografoId}/disponibilidad`);
  }
  
  const initialData = {
    id:              rule.id,
    fotografoId:     rule.fotografoId,
    recurring:       rule.recurring,
    weekday:         rule.weekday,
    startDate:       rule.startDate?.slice(0, 10) ?? undefined,
    endDate:         rule.endDate?.slice(0, 10) ?? undefined,
    activo:          rule.activo,
  };
  console.log("🚀 ~ initialData:", initialData)

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={Pencil}
        description="En este apartado podrás editar una regla de disponibilidad"
        screenName="Editar Disponibilidad"
      />
      <DisponibilidadForm isUpdate={true} initialData={initialData} />
    </div>
  );
}
