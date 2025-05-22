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
import { isSlotAvailableByHourNumber } from "@/app/(protected)/reservas/actions"


// Helper function to validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Helper function to validate phone format (simple version)
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\d{8,10}$/
  return phoneRegex.test(phone.replace(/\D/g, ""))
}

export default function CheckoutWizardPage() {
  const params = useSearchParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isSlotAvailable, setIsSlotAvailable] = useState<boolean | null>(null)
  const [invalidParams, setInvalidParams] = useState<string[]>([])

  const dateIso = params.get("date") || ""
  const hour = params.get("hour") || ""
  const name = params.get("name") || ""
  const email = params.get("email") || ""
  const phone = params.get("phone") || ""
  const fotografo = params.get("fotografoName") || ""
  const fotografoId = params.get("fotografoId") || ""

  // Parse hour to number
  const hourNumber = hour ? Number(hour) : null

  // Create date object if dateIso is valid
  let date: Date | null = null
  let formattedDate = ""
  let formattedDay = ""
  let formattedMonth = ""

  try {
    if (dateIso) {
      date = new Date(dateIso)
      // Check if date is valid
      if (!isNaN(date.getTime())) {
        formattedDate = format(date, "EEEE, d 'de' MMMM yyyy", { locale: es })
        formattedDay = format(date, "dd", { locale: es })
        formattedMonth = format(date, "MMM", { locale: es })
      } else {
        date = null
      }
    }
  } catch (error) {
    console.error("Error parsing date:", error)
    date = null
  }

  useEffect(() => {
    // Validate all required parameters
    const missingParams: string[] = []

    if (!dateIso || !date) missingParams.push("Fecha")
    if (!hour || hourNumber === null || isNaN(hourNumber) || hourNumber < 0 || hourNumber > 23)
      missingParams.push("Hora")
    if (!name) missingParams.push("Nombre")
    if (!email || !isValidEmail(email)) missingParams.push("Email")
    if (!phone || !isValidPhone(phone)) missingParams.push("Teléfono")
    if (!fotografo) missingParams.push("Fotógrafo")
    if (!fotografoId) missingParams.push("ID del fotógrafo")

    setInvalidParams(missingParams)

    // If all parameters are valid, check slot availability
    if (missingParams.length === 0) {
      checkSlotAvailability()
    } else {
      setIsLoading(false)
    }
  }, [dateIso, hour, name, email, phone, fotografo, fotografoId])

  const checkSlotAvailability = async () => {
    setIsLoading(true)

    try {
      if (date && hourNumber !== null) {
        const available = await isSlotAvailableByHourNumber({
          fecha: date,
          horaInicioNumber: hourNumber,
        })
        setIsSlotAvailable(available)
      }
    } catch (error) {
      console.error("Error checking slot availability:", error)
      setIsSlotAvailable(false)
    } finally {
      setIsLoading(false)
    }
  }

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

  const goToHome = () => {
    router.push("/")
  }

  const steps = [
    {
      title: "Detalle de la reserva",
      icon: <CalendarCheck className="h-6 w-6" />,
    },
    {
      title: "Información de pago",
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: "Confirmación",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
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
        )
      case 1:
        return <PaymentForm email={email} fotografoId={fotografoId} hora={hourNumber!} nombre={name} telefono={phone} fecha={date!} onNext={nextStep} onPrev={prevStep} />
      case 2:
        return <Confirmation email={email} onGoHome={goToHome} />
      default:
        return null
    }
  }

  // Render different components based on state
  const renderContent = () => {
    // If there are invalid parameters, show the invalid parameters component
    if (invalidParams.length > 0) {
      return <InvalidParameters missingParams={invalidParams} onBack={() => router.push("/booking")} />
    }

    // If still loading, show loading component
    if (isLoading) {
      return <LoadingState />
    }

    // If slot is not available, show unavailable component
    if (isSlotAvailable === !true) {
      return (
        <SlotUnavailable
          date={formattedDate}
          hour={hour}
          fotografo={fotografo}
          onBack={() => router.push("/booking")}
        />
      )
    }

    // Otherwise show the normal checkout flow
    return (
      <>
        <ProgressSteps steps={steps} currentStep={currentStep} />
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStepContent()}
        </motion.div>
      </>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Proceso de Reserva</h1>
      {renderContent()}
    </div>
  )
}
