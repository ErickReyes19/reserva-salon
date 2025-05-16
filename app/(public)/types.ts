export type ReservaEvent = {
  id: string;
  title: string;
  start: string; // fecha + horaInicio (ISO string)
  end: string;   // fecha + horaFin (ISO string)
  estado: string;
  emailCliente: string;
};
