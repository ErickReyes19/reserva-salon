'use client'

import React, { useState, useMemo } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar, Clock, Loader2, Mail, Phone, User, Camera, Briefcase } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Fotografo } from "@/app/(protected)/fotografos/type"
import { formatHour } from "@/lib/utils"
import type { PhotoService } from "@/app/(protected)/servicios/type"

interface ReservationModalProps {
  isOpen: boolean
  isLoading: boolean
  selectedDate: Date
  selectedHour: number | null
  fotografos: Fotografo[]
  services: PhotoService[]
  selectedService: string
  onServiceChange: (id: string, price: string, serviceName:string) => void
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
  services,
  selectedService,
  onServiceChange,
  selectedFotografo,
  setSelectedFotografo,
  onClose,
  onConfirm,
}: ReservationModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

  const isFormValid = useMemo(
    () => selectedService && selectedFotografo && formData.name && formData.email && formData.phone,
    [selectedService, selectedFotografo, formData]
  )

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceSelect = (serviceId: string) => {
    const svc = services.find((s) => s.id === serviceId)
    const price = svc ? svc.precio.toString() : ""
    const name = svc ? svc.name : ""
    onServiceChange(serviceId, price, name)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !isLoading && (open ? null : onClose())}>
      <DialogContent className="sm:max-w-md rounded-xl p-0 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white">
          <DialogTitle className="text-xl font-semibold text-center mb-4">Confirmar Reserva</DialogTitle>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2"><Calendar className="h-5 w-5" /></div>
              <span className="text-sm font-medium">{format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2"><Clock className="h-5 w-5" /></div>
              <span className="text-sm font-medium">{selectedHour !== null ? formatHour(selectedHour) : ""}</span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-4" />
            <p className="text-gray-600 font-medium">Procesando su reserva...</p>
          </div>
        ) : (
          <form className="space-y-5 p-6" onSubmit={(e) => { e.preventDefault(); onConfirm(formData.name, formData.email, formData.phone) }}>
            {/* Servicio */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servicio *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Briefcase className="h-4 w-4 text-gray-400" /></div>
                <Select onValueChange={handleServiceSelect} value={selectedService} disabled={services.length === 0}>
                  <SelectTrigger id="service" className="pl-10 rounded-lg"><SelectValue placeholder="Elige un servicio" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.id} value={s.id!}>{s.name} - HNL{s.precio}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Fotógrafo */}
            <div>
              <label htmlFor="fotografo" className="block text-sm font-medium text-gray-700 mb-1">Fotógrafo *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Camera className="h-4 w-4 text-gray-400" /></div>
                <Select onValueChange={setSelectedFotografo} value={selectedFotografo} disabled={!selectedService}>
                  <SelectTrigger id="fotografo" className="pl-10 rounded-lg"><SelectValue placeholder={!selectedService ? "Primero elige un servicio" : "Elige un fotógrafo"} /></SelectTrigger>
                  <SelectContent>
                    {fotografos.map((f) => <SelectItem key={f.id} value={f.id!}>{f.nombre}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-4 w-4 text-gray-400" /></div>
                <Input value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Tu nombre" className="pl-10" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail className="h-4 w-4 text-gray-400" /></div>
                <Input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="tu@email.com" className="pl-10" required />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Phone className="h-4 w-4 text-gray-400" /></div>
                <Input type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="Tu teléfono" className="pl-10" required />
              </div>
            </div>

            <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2">
              <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">Cancelar</Button>
              <Button type="submit" disabled={!isFormValid} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50">Confirmar Reserva</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
