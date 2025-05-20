// components/header-client.tsx
"use client";

import { useState, useEffect } from "react";

export default function HeaderClient() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        const height = section.clientHeight;
        const id = section.id;
        if (id && scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      {/* Aquí renderizas tu logo, nav links, y aplicas alguna clase “active” según activeSection */}
    </header>
  );
}
