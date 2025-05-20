import React from 'react';
import { TrendingUp } from 'lucide-react';
import TimeDisplay from './TimeDisplay';

const NavbarHome = () => {
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

        {/* DERECHA: Time Matters + Relojes */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-white">Time Matters</span>
          <TimeDisplay />
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
