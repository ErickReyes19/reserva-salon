import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

interface ConfirmationProps {
  email: string
  onGoHome: () => void
}

export function Confirmation({ email, onGoHome }: ConfirmationProps) {
  return (
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
        <Button onClick={onGoHome}>Ir al inicio</Button>
      </CardFooter>
    </Card>
  )
}
