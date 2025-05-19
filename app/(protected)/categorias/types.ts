export type PhotoService = {
  id?: string
  name: string
  img: string
  description: string
  activo: boolean
  categoryId: string
}

export type Category = {
  id?: string
  name: string
  activo?: boolean
}
