import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para convertir hora de formato 24h a 12h
export const formatHour = (hour: number): string => {
  const period = hour >= 12 ? "PM" : "AM"
  const h = hour % 12 || 12
  return `${h}:00 ${period}`
}
