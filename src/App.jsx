import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Importar el footer

import Home from './pages/Home';
import Projects from './pages/Projects';
import Extras from './pages/Extras';
import ProfessionalProfile from './pages/ProfessionalProfile/ProfessionalProfile';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/profile" element={<ProfessionalProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
      <Footer /> {/* ✅ Footer global al final */}
    </Router>
  );
}
