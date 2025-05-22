"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar, Clock, Loader2, Mail, Phone, User, Camera } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Fotografo } from "@/app/(protected)/fotografos/type"
import { formatHour } from "@/lib/utils"

interface ReservationModalProps {
  isOpen: boolean
  isLoading: boolean
  selectedDate: Date
  selectedHour: number | null
  fotografos: Fotografo[]
  selectedFotografo: string
  setSelectedFotografo: (id: string) => void
  onClose: () => void
  onConfirm: (name: string, email: string, phone: string) => void
}

export default function ReservationModal({
  isOpen,
  isLoading,
  selectedDate,
  selectedHour,
  fotografos,
  selectedFotografo,
  setSelectedFotografo,
  onClose,
  onConfirm,
}: ReservationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !isLoading && (open ? null : onClose())}>
      <DialogContent className="sm:max-w-md rounded-xl p-0 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white">
          <DialogTitle className="text-xl font-semibold text-center mb-4">Confirmar Reserva</DialogTitle>

          {/* Información de la reserva en el header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">
                {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Clock className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{selectedHour !== null ? formatHour(selectedHour) : ""}</span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-4" />
            <p className="text-gray-600 font-medium">Procesando su reserva...</p>
            <p className="text-gray-500 text-sm mt-1">Esto puede tomar unos segundos</p>
          </div>
        ) : (
          <form
            className="space-y-5 p-6"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const name = (form.elements.namedItem("name") as HTMLInputElement).value
              const email = (form.elements.namedItem("email") as HTMLInputElement).value
              const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
              onConfirm(name, email, phone)
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <Input id="name" name="name" className="pl-10 rounded-lg" placeholder="Tu nombre" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="email"
                  name="email"
                  className="pl-10 rounded-lg"
                  placeholder="tu@email.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="fotografo" className="block text-sm font-medium text-gray-700 mb-1">
                Fotógrafo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Camera className="h-4 w-4 text-gray-400" />
                </div>
                <Select onValueChange={setSelectedFotografo} value={selectedFotografo}>
                  <SelectTrigger id="fotografo" className="pl-10 rounded-lg">
                    <SelectValue placeholder="Elige un fotógrafo" />
                  </SelectTrigger>
                  <SelectContent>
                    {fotografos.map((f) => (
                      <SelectItem key={f.id} value={f.id || ""}>
                        {f.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="phone"
                  name="phone"
                  className="pl-10 rounded-lg"
                  placeholder="Tu teléfono"
                  type="tel"
                  required
                />
              </div>
            </div>

            <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2">
              <Button variant="outline" type="button" onClick={onClose} className="w-full sm:w-auto">
                Cancelar
              </Button>
              <Button type="submit" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                Confirmar Reserva
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
