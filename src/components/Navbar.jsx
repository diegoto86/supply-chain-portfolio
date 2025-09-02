import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-grotesk transition-colors transition-transform duration-300 ${
        isScrolled ? 'bg-emerald-400' : 'bg-white'
      }`}
    >
      <div className="h-2 bg-emerald-400" />
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8 text-black">
          <div className="border-2 border-black px-2 py-1 font-bold leading-none">ZJ</div>
          <Link to="/projects" className="hover:text-emerald-600">
            Projects
          </Link>
          <Link to="/extras" className="hover:text-emerald-600">
            Extras
          </Link>
          <Link to="/knowledge" className="hover:text-emerald-600">
            Knowledge
          </Link>
        </div>
        <Link
          to="/contact"
          className="border-2 border-black px-4 py-2 text-black transition-colors hover:bg-black hover:text-white"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
