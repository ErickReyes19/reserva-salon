export type Reserva = {
  id?: string;
  fecha: Date;
  horaInicio: Date;
  horaFin: Date;
  fotografoId: string;
  clienteId: string;
  photoServiceId?: string;
  estado: boolean;
  precio?: number;  // nuevo campo

  fotografoNombre?: string;
  clienteNombre?: string;
  nombreSesion?: string;
};
