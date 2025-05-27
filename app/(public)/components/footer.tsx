import { Camera, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-xl">ElStudio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Capturando momentos, creando recuerdos. Nuestro estudio fotográfico profesional está dedicado a la
              excelencia visual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#home" },
                { label: "Sobre Nosotros", href: "#about" },
                { label: "Servicios", href: "#services" },
                { label: "Portafolio", href: "#portfolio" },
                { label: "Contacto", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {[
                "Fotografía de Retratos",
                "Fotografía de Bodas",
                "Fotografía de Eventos",
                "Fotografía de Producto",
                "Sesiones Familiares",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-purple-400" />
                <span>Calle Principal 123, Ciudad, CP 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span>info@ElStudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} ElStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
