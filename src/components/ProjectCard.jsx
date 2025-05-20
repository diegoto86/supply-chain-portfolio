import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white border rounded-lg p-6 shadow hover:shadow-md transition w-full max-w-md">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Ver más
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
