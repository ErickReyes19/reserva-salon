export type PhotoService = {
  id?: string;
  name: string;
  img: string;
  description: string;
  precio: number;
  activo?: boolean;
  categoryId: string;
  categoriaNombre?: string;

  // Fotógrafos como IDs
  fotografos?: string[];
};