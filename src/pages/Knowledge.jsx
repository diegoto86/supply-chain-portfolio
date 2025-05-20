import React from 'react';
import KnowledgeCard from '../components/KnowledgeCard';

const knowledgeAreas = [
  { title: 'Demand Planning', icon: '📈' },
  { title: 'Supply Planning', icon: '🚚' },
  { title: 'Assortment Planning', icon: '🧺' },
  { title: 'Supply Chain Algorithms', icon: '🔁' },
  { title: 'Advanced Planning Apps', icon: '🧠' },
  { title: 'Supply Chain Architecture', icon: '🏗️' },
];

const Knowledge = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Knowledge Portfolio
      </h2>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center">
        Explora áreas clave de supply chain y tecnología donde aplico y comparto conocimiento técnico avanzado.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {knowledgeAreas.map((area, index) => (
          <KnowledgeCard key={index} title={area.title} icon={area.icon} />
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
