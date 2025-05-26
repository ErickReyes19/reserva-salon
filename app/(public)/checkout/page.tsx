/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
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
import { ProgressSteps } from "./components/barra-progreso"
import { isPhotographerAvailable, isSlotAvailableByHourNumber } from "@/app/(protected)/reservas/actions"
import { FotografoNoDisponible } from "./components/fotografo-no-disponoble"

export default function CheckoutWizardPage() {
  const params = useSearchParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isSlotAvailable, setIsSlotAvailable] = useState<boolean | null>(null)
  const [isPhotoAvailable, setIsPhotoAvailable] = useState<boolean | null>(null)
  const [invalidParams, setInvalidParams] = useState<string[]>([])

  const dateIso = params.get("date") || ""
  const hour = params.get("hour") || ""
  const name = params.get("name") || ""
  const email = params.get("email") || ""
  const phone = params.get("phone") || ""
  const fotografo = params.get("fotografoName") || ""
  const fotografoId = params.get("fotografoId") || ""

  const hourNumber = hour ? Number(hour) : null

  // Formateo de fecha
  let date: Date | null = null
  let formattedDate = ""
  let formattedDay = ""
  let formattedMonth = ""
  try {
    if (dateIso) {
      const d = new Date(dateIso)
      if (!isNaN(d.getTime())) {
        date = d
        formattedDate = format(d, "EEEE, d 'de' MMMM yyyy", { locale: es })
        formattedDay = format(d, "dd", { locale: es })
        formattedMonth = format(d, "MMM", { locale: es })
      }
    }
  } catch {
    date = null
  }

  useEffect(() => {
    const missing: string[] = []
    if (!date) missing.push("Fecha")
    if (hourNumber === null || isNaN(hourNumber)) missing.push("Hora")
    if (!name) missing.push("Nombre")
    if (!email) missing.push("Email")
    if (!phone) missing.push("Teléfono")
    if (!fotografo) missing.push("Fotógrafo")
    if (!fotografoId) missing.push("ID del fotógrafo")
    setInvalidParams(missing)

    if (missing.length === 0 && date && hourNumber !== null) {
      (async () => {
        setIsLoading(true)
        // Validar slot
        const slotFree = await isSlotAvailableByHourNumber({ fecha: date, horaInicioNumber: hourNumber })
        setIsSlotAvailable(slotFree)
        // Si slot libre, validar fotógrafo
        if (slotFree) {
          const available = await isPhotographerAvailable(fotografoId, date)
          setIsPhotoAvailable(available)
        }
        setIsLoading(false)
      })()
    } else {
      setIsLoading(false)
    }
  }, [dateIso, hour, name, email, phone, fotografo, fotografoId])

  const nextStep = () => setCurrentStep(s => Math.min(s + 1, 2))
  const prevStep = () => setCurrentStep(s => Math.max(s - 1, 0))
  const goHome = () => router.push("/")

  const steps = [
    { title: "Detalle de la reserva", icon: <CalendarCheck className="h-6 w-6" /> },
    { title: "Información de pago", icon: <CreditCard className="h-6 w-6" /> },
    { title: "Confirmación", icon: <CheckCircle className="h-6 w-6" /> },
  ]

  // Renderizado según estado
  if (invalidParams.length) {
    return <InvalidParameters missingParams={invalidParams} onBack={() => router.push("/")} />
  }
  if (isLoading) return <LoadingState />
  if (!isSlotAvailable) {
    return <SlotUnavailable date={formattedDate} hour={hour} fotografo={fotografo} onBack={() => router.push("/")} />
  }
  if (isSlotAvailable && isPhotoAvailable === false) {
    return <FotografoNoDisponible dateFormatted={formattedDate} hora={hour} fotografoName={fotografo} onBack={() => router.push("/")} />
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
            formattedDate={formattedDate}
            formattedDay={formattedDay}
            formattedMonth={formattedMonth}
            hour={hour}
            name={name}
            email={email}
            phone={phone}
            fotografo={fotografo}
            onNext={nextStep}
          />
        )}
        {currentStep === 1 && date && (
          <PaymentForm
            email={email}
            fotografoId={fotografoId}
            hora={hourNumber!}
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
