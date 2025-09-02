import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarHome() {
  const location = useLocation();

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Professional Profile", path: "/profile" },
    { label: "Knowledge Base", path: "/knowledge" },
    { label: "Proyectos", path: "/proyectos" },
  ];

  return (
    <nav className="w-full bg-black text-white px-6 py-4 border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* IZQUIERDA: Logo + Lema */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-sm p-1 flex items-center justify-center">
            <TrendingUp size={25} className="text-black" />
          </div>
          <div className="leading-tight text-sm md:text-base text-gray-300">
            <div className="flex flex-col justify-center">
              <span className="block">A value-creating professional</span>
              <span className="block">for supply chain enterprises</span>
            </div>
          </div>
        </div>

        {/* DERECHA: Pills de navegación */}
        <div className="flex gap-4 text-sm font-medium text-white">
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
      </div>
    </nav>
  );
}
