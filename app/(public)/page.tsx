import { Suspense } from 'react';
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import PhotographersSection from "./components/sections/photographers-section";
import ServicesSection from "./components/sections/services-section";
import TestimonialsSection from "./components/sections/testimonials";
import BookingSection from "./components/sections/booking-section";
import Header from './components/header';

export default function PublicPage() {
  return (
    <main className="pt-16">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <PhotographersSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <BookingSection />
      </Suspense>
    </main>
  );
}