// /app/(public)/layout.tsx
import React from "react";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  );
};

export default PublicLayout;
