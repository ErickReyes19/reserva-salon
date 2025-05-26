export type ReservaEvent = {
  id: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
};
export interface PhotoService {
  id: string
  name: string
  img: string
  description: string
  category: string
  precio: number
  fotografos: string[]
}

/** Categoría con sus servicios */
export interface CategoryWithServices {
  id: string
  name: string
  services: PhotoService[]
}