"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CheckCircle, CreditCard, Calendar, Clock, User, ArrowRight, ArrowLeft, CalendarCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function CheckoutWizardPage() {
  const params = useSearchParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const dateIso = params.get("date") || ""
  const hour = params.get("hour") || ""
  const name = params.get("name") || ""
  const email = params.get("email") || ""
  const phone = params.get("phone") || ""

  const date = dateIso ? new Date(dateIso) : new Date()
  const formattedDate = format(date, "EEEE, d 'de' MMMM yyyy", { locale: es })
  const formattedDay = format(date, "dd", { locale: es })
  const formattedMonth = format(date, "MMM", { locale: es })

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const steps = [
    {
      title: "Detalle de la reserva",
      icon: <CalendarCheck className="h-6 w-6" />,
      content: (
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
                  <div className="text-blue-800 font-medium text-sm mt-2">{hour}:00</div>
                </div>
              </div>

              {/* Información personal */}
              <div className="w-2/3 p-6">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                  <User className="h-4 w-4 mr-2 text-blue-600" />
                  Información Personal
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className="w-24 text-gray-500">Nombre:</div>
                    <div className="font-medium">{name}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 text-gray-500">Correo:</div>
                    <div className="font-medium">{email}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 text-gray-500">Teléfono:</div>
                    <div className="font-medium">{phone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detalles de la reserva */}
            <div className="p-6">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                Detalles de la Cita
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-700">{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-700">{hour}:00 hrs</span>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="px-6 py-4 bg-gray-50 border-t">
            <div className="w-full flex justify-end">
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 gap-1">
                Continuar al Pago
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ),
    },
    {
      title: "Información de pago",
      icon: <CreditCard className="h-6 w-6" />,
      content: (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Paso 2: Información de pago
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Número de tarjeta" />
            <div className="flex space-x-2">
              <Input placeholder="MM/YY" className="flex-1" />
              <Input placeholder="CVV" className="w-24" />
            </div>
            <Input placeholder="Nombre en la tarjeta" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep} className="gap-1">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Atrás
            </Button>
            <Button onClick={nextStep}>Pagar</Button>
          </CardFooter>
        </Card>
      ),
    },
    {
      title: "Confirmación",
      icon: <CheckCircle className="h-6 w-6" />,
      content: (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Paso 3: Confirmación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">¡Tu pago se ha procesado correctamente!</h3>
              <p className="text-gray-500 text-center">
                Gracias por confiar en nosotros. Hemos enviado un correo de confirmación a {email}.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={() => router.push("/")}>Ir al inicio</Button>
          </CardFooter>
        </Card>
      ),
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Proceso de Reserva</h1>

      {/* Progress Steps */}
      <div className="mb-10">
        <div className="flex justify-center items-center mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index <= currentStep
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white text-gray-400"
                } transition-all duration-300`}
              >
                {step.icon}
              </div>

              {index < steps.length - 1 && (
                <div className="w-24 h-1 mx-2 bg-gray-200">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <p className="text-lg font-medium">{steps[currentStep].title}</p>
        </div>
      </div>

      {/* Step Content with Animation */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {steps[currentStep].content}
      </motion.div>
    </div>
  )
}
