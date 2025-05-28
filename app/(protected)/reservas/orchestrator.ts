"use server"

import { EmailService, type MailPayload } from "@/app/(public)/checkout/actions"
import { createReserva } from "./actions"
import type { Reserva } from "./type"
import { EmailTemplateData, EmailTemplateGenerator } from "@/lib/email-template"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const emailService = new EmailService()

export async function createReservaAndNotify(payload: {
  reservaData: Parameters<typeof createReserva>[0]
  clienteEmail: string
  clienteNombre: string
  fotografoEmail: string
  fotografoNombre: string
  serviceName: string
}): Promise<Reserva> {
  try {
    // 1) Crear reserva
    const reserva: Reserva = await createReserva(payload.reservaData)

    // 2) Ajustar para display sin media hora y con offset de zona (UTC+0 -> UTC-6)
    const rawStart = reserva.horaInicio    // DB: –30min para preparación
    const rawEnd = reserva.horaFin         // DB: +1h +30min tras sesión

    // Revertir media hora inicial y final
    const baseStart = new Date(rawStart.getTime() + 30 * 60_000)
    const baseEnd   = new Date(rawEnd.getTime()   - 30 * 60_000)

    // Añadir 6 horas para convertir a hora de Honduras (UTC-6)
    const offsetMs = 6 * 60 * 60_000
    const localStart = new Date(baseStart.getTime() + offsetMs)
    const localEnd   = new Date(baseEnd.getTime()   + offsetMs)

    // Formatear fecha y horas legibles
    const fechaStr     = format(localStart, "EEEE, d 'de' MMMM yyyy", { locale: es })
    const horaStartStr = format(localStart, "h a", { locale: es })
    const horaEndStr   = format(localEnd,   "h a", { locale: es })

    // 3) Preparar datos para templates
    const templateData: EmailTemplateData = {
      clienteNombre:   payload.clienteNombre,
      fotografoNombre: payload.fotografoNombre,
      serviceName:     payload.serviceName,
      fecha:           fechaStr,
      horaInicio:        `${horaStartStr} – ${horaEndStr}`,
    }

    // 4) Generar emails con diseño mejorado
    const clienteHtml   = EmailTemplateGenerator.generateClientConfirmationEmail(templateData)
    const fotografoHtml = EmailTemplateGenerator.generatePhotographerNotificationEmail(templateData)

    // 5) Configurar y enviar emails
    const clienteMail: MailPayload = {
      to:      payload.clienteEmail,
      subject: "✨ Tu reserva está confirmada - ¡Nos vemos pronto!",
      html:    clienteHtml,
    }
    const fotografoMail: MailPayload = {
      to:      payload.fotografoEmail,
      subject: "🎉 Nueva reserva recibida - Revisa los detalles",
      html:    fotografoHtml,
    }

    await Promise.all([
      emailService.sendMail(clienteMail),
      emailService.sendMail(fotografoMail),
    ])

    return reserva
  } catch (error) {
    console.error("Error en createReservaAndNotify:", error)
    throw new Error("Error al procesar la reserva y enviar notificaciones")
  }
}
