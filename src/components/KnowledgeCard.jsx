import React from 'react';

const KnowledgeCard = ({ icon, title }) => {
  return (
    <div className="bg-white border rounded-lg p-6 shadow hover:shadow-md transition w-full max-w-sm flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
    </div>
  );
};

export default KnowledgeCard;
