import React, { useState } from 'react';

const experiences = {
  Sanofi: {
    title: 'Supply Chain Planning Platform Owner · Sanofi',
    description:
      'Lideré la implementación global de E2open para colaboración con proveedores integrando datos desde SAP y Snowflake. Rediseñé procesos de VMI/CMI y evité pérdidas por licencias no utilizadas.',
    highlights: [
      'Ahorro de €300K anuales en licencias.',
      'Integración completa SAP → Snowflake → E2open.',
      'Redefinición de ownership global para planificación VMI/CMI.',
      'Mapeo y diseño funcional global de procesos colaborativos.',
    ],
  },
  'o9 Solutions': {
    title: 'Consultor Funcional · o9 Solutions',
    description:
      'Consultor funcional en planificación de demanda y merchandising para retail y supply chain. Participé en proyectos de Mango, GrandVision, y Cargotec.',
    highlights: [
      'Configuración y pruebas funcionales en retail planning.',
      'Resolución de bugs post go-live.',
      'Soporte funcional a usuarios clave.',
      'Capacitación a equipos globales.',
    ],
  },
  Slimstock: {
    title: 'Consultor Funcional · Slimstock',
    description:
      'Implementación de forecasting multicanal y reposición automatizada para Desigual con Slim4. Mejora en cobertura y rotación de inventario.',
    highlights: [
      'Modelos de forecast diferenciados por canal.',
      'Optimización de niveles de stock por referencia.',
      'Reducción de quiebres en tiendas clave.',
      'Soporte y capacitación a usuarios.',
    ],
  },
  'Famesa Explosivos': {
    title: 'Project Leader · Famesa Explosivos',
    description:
      'Lideré la transformación de la planificación de supply chain para 4 plantas de producción. Implementación de S&OP simplificado.',
    highlights: [
      'Diseño e implementación de proceso S&OP.',
      'Aseguramiento de producción continua minera.',
      'Sincronización de demanda y capacidad.',
      'Reducción de inventario de seguridad innecesario.',
    ],
  },
  ABB: {
    title: 'Supply Chain Specialist · ABB',
    description:
      'Responsable de procesos de compra para materiales eléctricos y definición de parámetros logísticos para consumo masivo.',
    highlights: [
      'Definición de MOQ y stock de seguridad.',
      'Automatización de compras para líneas clave.',
      'Optimización de flujos de abastecimiento.',
      'Mejora de cumplimiento de proveedores.',
    ],
  },
  'ESCO Weir Minerals': {
    title: 'Senior Supply Chain Planner · ESCO',
    description:
      'Planificación de producción de piezas fundidas para minería peruana. Atención a clientes como Antamina y Southern.',
    highlights: [
      'Plan maestro de producción por cliente y SKU.',
      'Seguimiento a órdenes de planta vs entregas.',
      'Ajustes de capacidad según demanda real.',
      'Cobertura completa sin sobrecostos.',
    ],
  },
};

export default function ExperienceSection() {
  const [selected, setSelected] = useState('Sanofi');

  return (
    <section className="flex flex-col lg:flex-row text-white">
      {/* Menú lateral */}
      <aside className="lg:w-1/5 flex flex-col gap-4 p-4">
        {Object.keys(experiences).map((key, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(key)}
            className={`flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${selected === key ? 'bg-[#d8fe51] text-black' : 'bg-black text-white hover:bg-[#1a1a1a]'}`}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: selected === key ? '#000' : '#d8fe51',
              }}
            ></span>
            {key}
          </button>
        ))}
      </aside>

      {/* Contenido derecho */}
      <div className="flex-1 bg-[#1f1f1f] p-8 rounded-3xl mx-4 mb-4">
        <h2 className="text-[2.2rem] font-bold mb-6">{experiences[selected].title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <p className="text-gray-300 text-[1.1rem] leading-relaxed col-span-2">
            {experiences[selected].description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences[selected].highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#262626] p-4 rounded-xl shadow-sm text-sm text-white hover:bg-[#3a3a3a] transition-colors duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
