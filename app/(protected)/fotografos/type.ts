export type Fotografo = {
  id?: string;
  usuarioId: string;
  telefono: string;
  nombre: string;
  email?: string;
  bio: string;
  url: string;
  Foto: string;
  disponible?: boolean;

  usuarioNombre?: string;

  servicios?: {
    id: string;
    name: string;
    precio: number;
    img: string;
    description: string;
    categoryId: string;
    activo?: boolean;
    categoriaNombre?: string;
  }[];
};
