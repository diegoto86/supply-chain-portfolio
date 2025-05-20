import React from 'react';

const Card = ({ title, color = "bg-yellow-400", textColor = "text-black" }) => {
  return (
    <div className={`${color} ${textColor} rounded-xl shadow p-6 text-center font-semibold text-lg hover:scale-105 transition w-40`}>
      {title}
    </div>
  );
};

export default Card;
