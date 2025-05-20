// app/page.tsx
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import PhotographersSection from "./components/sections/photographers-section";
import ServicesSection from "./components/sections/services-section";
import PortfolioSection from "./components/sections/portafolio-section";
import TestimonialsSection from "./components/sections/testimonials";
import BookingSection from "./components/sections/booking-section";
import Footer from "./components/footer";
import HeaderClient from "./components/header-client";
import Header from "./components/header";

export default function PublicPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <PhotographersSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BookingSection />
        <Footer />
      </main>
    </>
  );
}
