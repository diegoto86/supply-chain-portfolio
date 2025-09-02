// src/components/BusinessCard.jsx
import React from 'react';
import { Copy, Mail, Phone, MapPin } from 'lucide-react';

const BusinessCard = () => {
  const copyToClipboard = (e, text) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-lg max-w-4xl w-full">
      
      {/* 📸 Columna izquierda para la imagen */}
      <div className="w-1/3 bg-cover bg-center" style={{
        backgroundImage: "url('/your-photo.jpg')" // reemplaza por la ruta de tu foto
      }}>
        {/* Puedes dejar este div vacío, es solo decorativo */}
      </div>

      {/* 🧾 Columna derecha para texto */}
      <div className="w-2/3 p-10 flex flex-col justify-center space-y-4">
        <h1 className="text-4xl font-bold">Diego Melendez</h1>
        <p className="text-lg font-semibold text-gray-300">
          IT Supply Chain Professional
        </p>

        <div className="space-y-3 text-sm text-gray-200">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-[#d8fe51]" />
            <span>diegom.dex@gmail.com</span>
            <Copy
              size={14}
              className="text-gray-400 hover:text-white cursor-pointer"
              onClick={(e) => copyToClipboard(e, 'diegom.dex@gmail.com')}
            />
          </div>

          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[#d8fe51]" />
            <span>+34 685 390 950</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-[#d8fe51]" />
            <span>Barcelona, Spain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
