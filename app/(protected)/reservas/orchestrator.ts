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
}): Promise<{ reserva: Reserva, emailEnviado: boolean }> {
  // 1) Crear reserva
  const reserva: Reserva = await createReserva(payload.reservaData)

  // 2) Ajustar para display sin media hora y con offset de zona (UTC+0 -> UTC-6)
  const rawStart = reserva.horaInicio
  const rawEnd = reserva.horaFin

  const baseStart = new Date(rawStart.getTime() + 30 * 60_000)
  const baseEnd   = new Date(rawEnd.getTime()   - 30 * 60_000)
  const offsetMs = 6 * 60 * 60_000
  const localStart = new Date(baseStart.getTime() + offsetMs)
  const localEnd   = new Date(baseEnd.getTime()   + offsetMs)

  const fechaStr     = format(localStart, "EEEE, d 'de' MMMM yyyy", { locale: es })
  const horaStartStr = format(localStart, "h a", { locale: es })
  const horaEndStr   = format(localEnd,   "h a", { locale: es })

  const templateData: EmailTemplateData = {
    clienteNombre:   payload.clienteNombre,
    fotografoNombre: payload.fotografoNombre,
    serviceName:     payload.serviceName,
    fecha:           fechaStr,
    horaInicio:      `${horaStartStr} – ${horaEndStr}`,
  }

  const clienteHtml   = EmailTemplateGenerator.generateClientConfirmationEmail(templateData)
  const fotografoHtml = EmailTemplateGenerator.generatePhotographerNotificationEmail(templateData)

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

  try {
    await Promise.all([
      emailService.sendMail(clienteMail),
      emailService.sendMail(fotografoMail),
    ])
    return { reserva, emailEnviado: true }
  } catch (emailError) {
    console.error("La reserva fue creada, pero falló el envío de correo:", emailError)
    return { reserva, emailEnviado: false }
  }
}

