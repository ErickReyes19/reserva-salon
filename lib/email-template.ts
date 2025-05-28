export interface EmailTemplateData {
  clienteNombre: string
  fotografoNombre: string
  serviceName: string
  fecha: string
  horaInicio: string
}

export class EmailTemplateGenerator {
  private static getBaseStyles(): string {
    return `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #374151;
          background-color: #f9fafb;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px 24px;
          text-align: center;
        }
        
        .header h1 {
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .header p {
          color: #e5e7eb;
          font-size: 16px;
          font-weight: 400;
        }
        
        .content {
          padding: 32px 24px;
        }
        
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 16px;
        }
        
        .message {
          font-size: 16px;
          color: #4b5563;
          margin-bottom: 32px;
          line-height: 1.7;
        }
        
        .details-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .details-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }
        
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .detail-row:last-child {
          border-bottom: none;
        }
        
        .detail-label {
          font-weight: 500;
          color: #6b7280;
          font-size: 14px;
        }
        
        .detail-value {
          font-weight: 600;
          color: #111827;
          font-size: 14px;
        }
        
        .highlight {
          background-color: #dbeafe;
          color: #1e40af;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }
        
        .status-badge {
          display: inline-block;
          background-color: #10b981;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .footer {
          background-color: #f9fafb;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        
        .footer p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }
        
        @media only screen and (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          
          .header, .content, .footer {
            padding: 24px 16px;
          }
          
          .details-card {
            padding: 16px;
          }
          
          .detail-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      </style>
    `
  }

  static generateClientConfirmationEmail(data: EmailTemplateData): string {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reserva Confirmada</title>
        ${this.getBaseStyles()}
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>✨ ¡Reserva Confirmada!</h1>
            <p>Tu sesión fotográfica está asegurada</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              ¡Hola ${data.clienteNombre}! 👋
            </div>
            
            <div class="message">
              Nos complace confirmar que tu reserva de:  <strong>${data.serviceName}</strong> 
              ha sido procesada exitosamente. Estamos emocionados de capturar momentos especiales contigo.
            </div>
            
            <div class="details-card">
              <div class="details-title">
                📅 Detalles de tu Reserva
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Servicio: </span>
                <span class="detail-value highlight">${data.serviceName}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Fecha: </span>
                <span class="detail-value">${data.fecha}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Hora de reserva: </span>
                <span class="detail-value">${data.horaInicio}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Fotógrafo: </span>
                <span class="detail-value">${data.fotografoNombre}</span>
              </div>
            </div>
            
            <div style="text-align: center; margin: 24px 0;">
              <span class="status-badge">Confirmada</span>
            </div>
            
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="color: #92400e; font-size: 14px; margin: 0;">
                <strong>💡 Recordatorio:</strong> Te recomendamos llegar 10 minutos antes de tu cita. 
                Si necesitas reprogramar o cancelar, por favor contáctanos con anticipación.
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>¿Tienes preguntas?</strong></p>
            <p>Estamos aquí para ayudarte. Responde a este email o contáctanos.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  static generatePhotographerNotificationEmail(data: EmailTemplateData): string {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva Reserva</title>
        ${this.getBaseStyles()}
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>🎉 ¡Nueva Reserva!</h1>
            <p>Tienes una nueva sesión programada</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              ¡Hola ${data.fotografoNombre}! 📸
            </div>
            
            <div class="message">
              Excelentes noticias: has recibido una nueva reserva de <strong>${data.clienteNombre}</strong> 
              para <strong>${data.serviceName}</strong>. Aquí tienes todos los detalles.
            </div>
            
            <div class="details-card">
              <div class="details-title">
                📅 Detalles de la Sesión
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Cliente: </span>
                <span class="detail-value highlight">${data.clienteNombre}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Servicio: </span>
                <span class="detail-value">${data.serviceName}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Fecha: </span>
                <span class="detail-value">${data.fecha}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Hora de reserva: </span>
                <span class="detail-value">${data.horaInicio}</span>
              </div>
            </div>
            
            <div style="text-align: center; margin: 24px 0;">
              <span class="status-badge">Nueva Reserva</span>
            </div>
            
            <div style="background-color: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="color: #1e40af; font-size: 14px; margin: 0;">
                <strong>📋 Próximos pasos:</strong> Revisa tu calendario, prepara tu equipo y 
                considera contactar al cliente para confirmar detalles específicos de la sesión.
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Gestiona tus reservas</strong></p>
            <p>Mantén tu calendario actualizado y prepárate para una sesión exitosa.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }
}
