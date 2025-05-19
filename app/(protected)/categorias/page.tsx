import { getSessionPermisos } from "@/auth";
import HeaderComponent from "@/components/HeaderComponent";
import NoAcceso from "@/components/noAccess";
import { FolderKanbanIcon } from "lucide-react"; // Ícono sugerido para categorías
import { getCategorias } from "./actions";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import CategoriaListMobile from "./components/category-list-mobile";

export default async function CategoriasPage() {
  const permisos = await getSessionPermisos();

  if (!permisos?.includes("ver_categoria")) {
    return <NoAcceso />;
  }

  const data = await getCategorias();

  return (
    <div className="container mx-auto py-2">
      <HeaderComponent
        Icon={FolderKanbanIcon}
        description="En este apartado podrá ver todas las categorías de servicios fotográficos."
        screenName="Categorías de Servicios"
      />

      <div className="hidden md:block">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="block md:hidden">
        <CategoriaListMobile categorias={data} />
      </div>
    </div>
  );
}
