import { create } from 'zustand'

// Define la forma del estado
interface ReservationState {
  date: Date | null
  hour: number | null
  photographerId: string
  photographerName: string
  serviceName: string
  serviceId: string
  price: number
  name: string
  email: string
  phone: string

  setReservation: (
    payload: Partial<Omit<ReservationState, 'setReservation' | 'reset'>>
  ) => void

  reset: () => void
}

// Crear el store
export const useReservationStore = create<ReservationState>((set) => ({
  date: null,
  hour: null,
  photographerId: '',
  photographerName: '',
  serviceId: '',
  serviceName: '',
  price: 0,
  name: '',
  email: '',
  phone: '',

  setReservation: (
    payload: Partial<Omit<ReservationState, 'setReservation' | 'reset'>>
  ) =>
    set((state) => ({
      ...state,
      ...payload,
    })),

  reset: () =>
    set(() => ({
      date: null,
      hour: null,
      photographerId: '',
      serviceName: '',
      photographerName: '',
      serviceId: '',
      price: 0,
      name: '',
      email: '',
      phone: '',
    })),
}))
