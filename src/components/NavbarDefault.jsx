import React from 'react';
import { Link } from 'react-router-dom';

const NavbarDefault = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-lg font-semibold">Diego Meléndez</span>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Proyectos</Link>
          <Link to="/cv" className="hover:underline">CV</Link>
          <Link to="/contact" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDefault;
