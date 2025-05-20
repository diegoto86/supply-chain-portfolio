import React from 'react';
import BackgroundNetwork from '../components/BackgroundNetwork';
import SelectorPill from '../components/SelectorPill';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-black text-white">
      {/* 🌐 Fondo animado */}
      <div className="absolute inset-0 z-0">
        <BackgroundNetwork />
      </div>

      {/* 🧠 Contenido centrado */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center space-y-14">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow">
            Diego Meléndez
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-xl mx-auto">
            IT Supply Chain Expert & Supply Chain Architect
          </p>
        </div>
        <SelectorPill />
      </main>

      {/* 🔻 Footer modularizado */}
      <Footer />
    </div>
  );
};

export default Home;
