// app/(protected)/fotografos/[id]/disponibilidad/create/page.tsx

import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { PlusCircle } from "lucide-react";
import { Unavailability } from "../type";
import { DisponibilidadForm } from "../components/Form";

export default async function CreateDisponibilidadPage() {
  const permisos = await getSessionPermisos();
  if (!permisos?.includes("crear_disponibilidad")) {
    return <NoAcceso />;
  }

  // Valores iniciales vacíos para el formulario
const initialData: Unavailability = {
  // Sin `id` ni `fotografoId` vacíos
  id: undefined,
  fotografoId: undefined,      // el ID real del fotógrafo
  recurring: false,
  weekday: undefined,
  startDate: undefined,
  endDate: undefined,
  activo: true,
};

  return (
    <div className="container mx-auto py-4">
      <HeaderComponent
        Icon={PlusCircle}
        description="En este apartado podrás agregar una nueva regla de disponibilidad"
        screenName="disponibilidad"
      />
      <DisponibilidadForm isUpdate={false} initialData={initialData} />
    </div>
  );
}
