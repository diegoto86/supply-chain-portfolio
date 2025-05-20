import React, { useState } from 'react';
import { Globe } from 'lucide-react'; // O usa otro icono si prefieres

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const languages = ['Español', 'English'];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
      >
        <Globe size={16} />
        <span>English</span>
        <span className="transform rotate-180">▾</span>
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 right-0 bg-black border border-white rounded-md text-sm w-36">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer"
              onClick={() => {
                setOpen(false);
                // Aquí podrías agregar lógica de cambio de idioma
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
