/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CheckCircle, CreditCard, CalendarCheck } from "lucide-react"
import { motion } from "framer-motion"
import { ReservationDetails } from "./components/detalles-reserva"
import { PaymentForm } from "./components/formulario-pago"
import { Confirmation } from "./components/confirmacion"
import { InvalidParameters } from "./components/datos-erroneos"
import { LoadingState } from "./components/validando-reserva"
import { SlotUnavailable } from "./components/reserva-no-disponible"
import { isPhotographerAvailable, isSlotAvailableByHourNumber } from "@/app/(protected)/reservas/actions"
import { FotografoNoDisponible } from "./components/fotografo-no-disponoble"
import { ProgressSteps } from "./components/barra-progreso"
import { useReservationStore } from "@/lib/store/useReservationStore"

export default function CheckoutWizardPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isSlotAvailable, setIsSlotAvailable] = useState<boolean | null>(null)
  const [isPhotoAvailable, setIsPhotoAvailable] = useState<boolean | null>(null)
  const [invalidParams, setInvalidParams] = useState<string[]>([])

  // Leer datos desde Zustand
  const {
    date,
    hour,
    photographerId,
    photographerName,
    serviceId,
    price,
    name,
    email,
    phone,
    serviceName,
    reset,
  } = useReservationStore()

  // Formateo de fecha
  let formattedDate = ""
  let formattedDay = ""
  let formattedMonth = ""
  if (date) {
    formattedDate = format(date, "EEEE, d 'de' MMMM yyyy", { locale: es })
    formattedDay = format(date, "dd", { locale: es })
    formattedMonth = format(date, "MMM", { locale: es })
  }

  useEffect(() => {
    const missing: string[] = []
    if (!date) missing.push("Fecha")
    if (hour === null || isNaN(hour)) missing.push("Hora")
    if (!name) missing.push("Nombre")
    if (!email) missing.push("Email")
    if (!phone) missing.push("Teléfono")
    if (!photographerName) missing.push("Fotógrafo")
    if (!photographerId) missing.push("ID del fotógrafo")
    if (!serviceId) missing.push("Servicio")
    setInvalidParams(missing)

    if (missing.length === 0 && date && hour !== null) {
      ; (async () => {
        setIsLoading(true)
        // validar slot
        const slotFree = await isSlotAvailableByHourNumber({ fecha: date, horaInicioNumber: hour })
        setIsSlotAvailable(slotFree)
        if (slotFree) {
          // validar fotógrafo
          const available = await isPhotographerAvailable(photographerId, date)
          setIsPhotoAvailable(available)
        }
        setIsLoading(false)
      })()
    } else {
      setIsLoading(false)
    }
  }, [date, hour, name, email, phone, photographerName, photographerId, serviceId])

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 2))
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0))
  const goHome = () => {
    router.push("/")
    reset()
  }

  const steps = [
    { title: "Detalle de la reserva", icon: <CalendarCheck className="h-6 w-6" /> },
    { title: "Información de pago", icon: <CreditCard className="h-6 w-6" /> },
    { title: "Confirmación", icon: <CheckCircle className="h-6 w-6" /> },
  ]

  // Estados de error/validación
  if (invalidParams.length) {
    return <InvalidParameters missingParams={invalidParams} onBack={() => goHome()} />
  }
  if (isLoading) return <LoadingState />
  if (!isSlotAvailable) {
    return <SlotUnavailable date={formattedDate} hour={hour!.toString()} fotografo={photographerName} onBack={() => goHome()} />
  }
  if (isSlotAvailable && isPhotoAvailable === false) {
    return <FotografoNoDisponible dateFormatted={formattedDate} hora={hour!.toString()} fotografoName={photographerName} onBack={() => goHome()} />
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Proceso de Reserva</h1>
      <ProgressSteps steps={steps} currentStep={currentStep} />
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {currentStep === 0 && (
          <ReservationDetails
            price={price}
            serviceName={serviceName}
            formattedDate={formattedDate}
            formattedDay={formattedDay}
            formattedMonth={formattedMonth}
            hour={hour!.toString()}
            name={name}
            email={email}
            phone={phone}
            fotografo={photographerName}
            onNext={nextStep}
          />
        )}
        {currentStep === 1 && date && (
          <PaymentForm
            price={price}
            serviceId={serviceId}
            email={email}
            fotografoId={photographerId}
            hora={hour!}
            nombre={name}
            telefono={phone}
            fecha={date}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )}
        {currentStep === 2 && <Confirmation email={email} onGoHome={goHome} />}
      </motion.div>
    </div>
  )
}
