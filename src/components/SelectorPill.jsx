import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pills = [
  { label: "Projects", path: "/projects" },
  { label: "Extras", path: "/extras" },
  { label: "Knowledge", path: "/knowledge" },
  { label: "Contact", path: "/contact" },
];

const SelectorPill = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-6 mt-12 justify-center items-center bg-[#d8fe51] px-4 py-3 rounded-full scale-[1.25]">
      {pills.map((pill, index) => (
        <button
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          onClick={() => navigate(pill.path)}
          className={`px-8 py-3 rounded-full text-base font-semibold transition-colors duration-300
            ${activeIndex === index ? 'bg-black text-[#d8fe51]' : 'bg-[#d8fe51] text-black'}`}
        >
          {pill.label}
        </button>
      ))}
    </div>
  );
};

export default SelectorPill;
