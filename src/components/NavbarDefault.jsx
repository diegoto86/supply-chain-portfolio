import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarDefault() {
  const location = useLocation();

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Proyectos", path: "/proyectos" },
    { label: "Knowledge Base", path: "/knowledge" },
    { label: "CV", path: "/cv" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-black border-b border-white px-6 py-4 flex items-center">
      {/* Icono + lema */}
      <div className="flex items-center space-x-4 text-white">
        <TrendingUp className="w-8 h-8" />
        <div className="leading-tight text-sm">
          <p className="font-semibold">A value-creating professional</p>
          <p className="text-white">for supply chain enterprises</p>
        </div>
      </div>

      {/* Navegación estilo pill */}
      <div className="ml-auto flex gap-4 text-sm font-medium text-white">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`px-4 py-2 rounded-full transition-colors duration-200
              ${location.pathname === item.path
                ? 'bg-[#d8fe51] text-black'
                : 'hover:bg-[#d8fe51] hover:text-black'}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
