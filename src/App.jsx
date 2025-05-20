import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import NavbarHome from './components/NavbarHome';
import NavbarDefault from './components/NavbarDefault';

import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {isHome ? <NavbarHome /> : <NavbarDefault />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
