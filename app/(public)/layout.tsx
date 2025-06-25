// /app/(public)/layout.tsx

import { Toaster } from "@/components/ui/sonner";
import React from "react";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        {children}
        <Toaster  />
      </body>
    </html>
  );
};

export default PublicLayout;
