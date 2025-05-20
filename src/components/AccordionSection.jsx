import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md mb-4">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200 font-semibold"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="p-4 bg-white text-gray-800">{children}</div>}
    </div>
  );
}
