// type.ts

export type Unavailability = {
  id?: string;
  fotografoId?: string;
  recurring: boolean;           // true = regla semanal, false = bloqueo puntual
  weekday?: number;             // 0=domingo … 6=sábado (si recurring=true)
  startDate?: string;           // ISO datetime (si recurring=false)
  endDate?: string;             // ISO datetime (si recurring=false)
  startTime?: string ;           // "HH:mm" (si recurring=false)
  endTime?: string;             // "HH:mm" (si recurring=false)
  activo: boolean;              // si la regla está activa
};
