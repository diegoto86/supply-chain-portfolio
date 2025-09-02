import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Extras from './pages/Extras';
import ProfessionalProfile from './pages/ProfessionalProfile/ProfessionalProfile';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/profile" element={<ProfessionalProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/knowledge" element={<Knowledge />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
