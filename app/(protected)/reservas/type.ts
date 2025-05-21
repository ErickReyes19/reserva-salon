export type Reserva = {
  id?: Date;
  fecha: Date;
  horaInicio: Date;
  horaFin: string;
  fotografoId: string;
  estado: string;
  clienteId: string;

  fotografoNombre?: string;
  clienteNombre?: string;
};
