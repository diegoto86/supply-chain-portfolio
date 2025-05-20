import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Sanofi – Supplier Collaboration con E2open',
      description: 'Rediseño y relanzamiento de procesos VMI/CMI integrados desde SAP usando Snowflake y Amazon S3.',
      link: '#',
    },
    {
      title: 'Cargotec – Demand & Supply Planning con o9',
      description: 'Implementación de modelo integrado de demanda y suministro en plataforma o9 Solutions.',
      link: '#',
    },
    {
      title: 'GrandVision – Assortment Planning',
      description: 'Proyecto retail con enfoque en definición de surtido y planificación de colección por regiones.',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">Mis Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
