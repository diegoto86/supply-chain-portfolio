import React from 'react';
import Button from '../components/ui/Button';
import { Download } from 'lucide-react';
import AccordionSection from '../components/AccordionSection';

export default function CV() {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-16 space-y-12">
      {/* Encabezado con nombre */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black">Diego Meléndez</h1>
        <p className="text-xl text-gray-700">
          Experto en Supply Chain | Transformación Digital | o9 & Kinaxis
        </p>
        <a href="/cv/Diego_Melendez_CV_ES.pdf" download>
          <Button variant="outline" className="flex items-center gap-2 mt-4">
            <Download className="h-4 w-4" /> Descargar CV en PDF
          </Button>
        </a>
      </section>

      {/* Secciones en acordeón */}
      <AccordionSection title="Experiencia Profesional">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Project Manager – Supply Chain Digital · Sanofi</h3>
            <p className="text-sm text-gray-700">Barcelona · 2021 – 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Lideré el relanzamiento de Supplier Collaboration con E2open integrado con SAP vía Snowflake & S3</li>
              <li>Rediseñé procesos VMI/CMI y asigné ownership global</li>
              <li>Evité pérdidas anuales de €300K por licencias infrautilizadas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Consultor Funcional · o9 Solutions</h3>
            <p className="text-sm text-gray-700">Barcelona · 2020 – 2021</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Implementación de planificación para Cargotec, GrandVision y Beluga</li>
              <li>Experiencia en MFP, Assortment y AI para retail</li>
              <li>Resolución de errores post-go live en Customer Success</li>
            </ul>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Educación y Certificaciones">
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Micromáster en Supply Chain – MIT</li>
          <li>Máster en Logística y Supply Chain – ESAN</li>
          <li>Certificación CSCP – APICS</li>
          <li>PL-300 Power BI (en curso)</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="Habilidades Técnicas">
        <div className="grid grid-cols-2 gap-4 text-gray-800">
          <ul className="list-disc list-inside space-y-1">
            <li>Kinaxis, o9, Slimstock</li>
            <li>Snowflake, Azure, SSIS, Airflow</li>
            <li>Power BI, Coupa</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>SQL, Python, JavaScript</li>
            <li>IBP, S&OP, VMI</li>
            <li>MFP, Assortment Planning</li>
          </ul>
        </div>
      </AccordionSection>

      <AccordionSection title="Idiomas y Habilidades Blandas">
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Español (nativo), Inglés (fluido)</li>
          <li>Liderazgo, comunicación efectiva, diseño de soluciones</li>
        </ul>
      </AccordionSection>
    </div>
  );
}
