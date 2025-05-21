import { Suspense } from "react";
import StaticHeader from "./header/static-header";
import DynamicNav from "./header/dynamic-nav";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <StaticHeader />

          {/* Nav */}
          <Suspense fallback={<div className="w-32 h-4 bg-gray-200 rounded" />}>
            <DynamicNav />
          </Suspense>

          {/* Botón */}
          <Button className="bg-purple-600 hover:bg-purple-700 hidden md:block">Contacto</Button>
        </div>
      </div>
    </header>
  );
}
