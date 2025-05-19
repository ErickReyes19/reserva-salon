"use client"

import { useEffect, useState } from "react"
import HeroSection from "./components/sections/hero-section"
import AboutSection from "./components/sections/about-section"
import PhotographersSection from "./components/sections/photographers-section"
import ServicesSection from "./components/sections/services-section"
import PortfolioSection from "./components/sections/portafolio-section"
import TestimonialsSection from "./components/sections/testimonials"
import BookingSection from "./components/sections/booking-section"
import Footer from "./components/footer"
import Header from "./components/header"

export default function PublicPage() {
  // Estado para la navegación
  const [activeSection, setActiveSection] = useState("home")

  // Efecto para detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id")

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <PhotographersSection />
        <ServicesSection  />
        <PortfolioSection />
        <TestimonialsSection />
        <BookingSection />
        <Footer />
      </main>
    </>
  )
}
