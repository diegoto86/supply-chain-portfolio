import React from 'react';
import LanguageDropdown from './LanguageDropdown';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-black text-white px-6 py-4 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
        
        {/* IZQUIERDA: texto legal */}
        <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
          <span>© Diego Melendez, 2025</span>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>

        {/* CENTRO: frase inspiracional */}
        <div className="text-sm text-gray-400">
          Página creada por Diego Melendez con la ayuda de ChatGPT.
        </div>

        {/* DERECHA: selector de idioma */}
        <div className="flex justify-center md:justify-end">
          <LanguageDropdown />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
