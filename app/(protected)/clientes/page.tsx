import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { FolderKanbanIcon, Users2 } from "lucide-react"; // Ícono sugerido para categorías
import { getClientes } from "./actions";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import ClienteListMobile from "./components/category-list-mobile";

export default async function CategoriasPage() {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_clientes")) {
    return <NoAcceso />;
  }

  const data = await getClientes();

  return (
    <div className="container mx-auto py-2">
      <HeaderComponent
        Icon={Users2}
        description="En este apartado podrá ver todos los clientes."
        screenName="Clientes"
      />

      <div className="hidden md:block">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="block md:hidden">
        <ClienteListMobile cliente={data} />
      </div>
    </div>
  );
}
