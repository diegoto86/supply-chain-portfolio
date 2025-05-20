// src/components/ui/Button.jsx

import React from "react";
import clsx from "clsx";

export default function Button({ children, variant = "default", className = "", ...props }) {
  const base = "px-4 py-2 text-sm font-medium rounded transition";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
