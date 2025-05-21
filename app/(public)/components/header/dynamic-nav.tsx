// components/header/dynamic-nav.tsx
"use client";

import { useEffect, useState } from "react";

export default function DynamicNav() {
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
    handleScroll();

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
  );
}
