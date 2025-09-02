import React from 'react';
import BackgroundNetwork from '../components/BackgroundNetwork';
import Footer from '../components/Footer';
import BusinessCard from '../components/BusinessCard';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-black text-white scroll-smooth">
      
      {/* 🌐 Fondo animado */}
      <div className="absolute inset-0 z-0">
        <BackgroundNetwork />
      </div>

      {/* 🎯 Contenido principal */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 pt-24 pb-32">
        <BusinessCard />
      </main>

    </div>
  );
};

export default Home;
