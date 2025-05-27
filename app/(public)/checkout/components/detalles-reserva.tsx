/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, CalendarCheck, Briefcase } from "lucide-react"

interface ReservationDetailsProps {
  formattedDate: string
  formattedDay: string
  formattedMonth: string
  hour: string
  name: string
  email: string
  phone: string
  fotografo: string
  serviceName: string  // nombre del servicio
  price: number        // precio del servicio
  onNext: () => void
}

export function ReservationDetails({
  formattedDate,
  formattedDay,
  formattedMonth,
  hour,
  name,
  email,
  phone,
  fotografo,
  serviceName,
  price,
  onNext,
}: ReservationDetailsProps) {
  // Calcular hora de fin (hora + 1)
  const hourNumber = parseInt(hour, 10)
  const endHour = hourNumber + 1 <= 23 ? hourNumber + 1 : 0

  // Subtotal y total (puedes agregar impuestos si quieres)
  const subtotal = price
  const total = subtotal

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-0 shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Detalles de Reserva</h2>
          <CalendarCheck className="h-7 w-7" />
        </div>
        <p className="text-blue-100 text-sm">Por favor confirma los detalles de tu reserva</p>
      </div>

      <CardContent className="p-0">
        <div className="flex border-b">
          {/* Fecha visual */}
          <div className="w-1/3 bg-blue-50 p-6 flex flex-col items-center justify-center border-r">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-2 w-20 mx-auto mb-2">
                <div className="bg-blue-600 text-white text-xs uppercase font-bold rounded-t-sm py-1">
                  {formattedMonth}
                </div>
                <div className="text-3xl font-bold py-2">{formattedDay}</div>
              </div>
              <div className="text-blue-800 font-medium text-sm mt-2">
                {hour}:00 - {endHour}:00
              </div>
            </div>
          </div>

          {/* Información personal */}
          <div className="w-auto p-6">
            <h3 className="font-medium text-gray-700 mb-3 flex items-center">
              <User className="h-4 w-4 mr-2 text-blue-600" /> Información Personal
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <div className="text-gray-500">Nombre: </div>
                <div className="font-medium">{name}</div>
              </div>
              <div className="flex items-start">
                <div className="text-gray-500">Correo: </div>
                <div className="font-medium">{email}</div>
              </div>
              <div className="flex items-start">
                <div className="text-gray-500">Teléfono: </div>
                <div className="font-medium">{phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detalles de la sesión */}
        <div className="p-6">
          <h3 className="font-medium text-gray-700 mb-3 flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" /> Detalles de la sesión
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 space-y-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-700">{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-700">{hour}:00 - {endHour}:00 hrs</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-700">{fotografo}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-700">Servicio: {serviceName}</span>
            </div>
          </div>

          {/* Resumen de precios */}
          <div className="mt-6 bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">HNL{subtotal}</span>
            </div>
            {/* Si necesitas impuestos, agrégalos aquí */}
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>HNL{total}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t">
        <div className="w-full flex justify-end">
          <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 gap-1">
            Continuar al Pago
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
