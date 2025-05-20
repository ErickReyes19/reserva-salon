"use client";

import { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        const height = section.clientHeight;
        const id = section.id;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inicializa al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "photographers", label: "Fotógrafos" },
    { id: "services", label: "Servicios" },
    { id: "reservar", label: "Reservar" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">FotoStudio</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  activeSection === item.id ? "text-purple-600" : "text-gray-600"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700">Contacto</Button>
        </div>
      </div>
    </header>
  );
}
