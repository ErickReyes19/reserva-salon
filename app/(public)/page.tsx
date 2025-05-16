// app/(public)/page.tsx
import { getReservasEvent } from "./actions";
import CalendarioReservas from "./components/calendar";

export default async function PublicPage() {
  const reservas = await getReservasEvent();
  console.log("🚀 ~ PublicPage ~ reservas:", reservas)

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Calendario de Reservas</h1>
      <CalendarioReservas eventos={reservas} />
    </main>
  );
}
