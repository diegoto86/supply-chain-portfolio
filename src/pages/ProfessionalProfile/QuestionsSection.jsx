import React from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    title: "¿Por qué deberíamos trabajar juntos?",
    text: "Porque aporto una combinación única de experiencia técnica, liderazgo en proyectos globales y enfoque en resultados sostenibles para supply chain.",
  },
  {
    title: "¿Qué tipo de proyectos me motivan?",
    text: "Aquellos donde puedo rediseñar procesos, implementar soluciones digitales y dejar un impacto tangible en eficiencia y visibilidad.",
  },
  {
    title: "¿Qué resultados he conseguido?",
    text: "He liderado proyectos que evitaron pérdidas anuales de más de €300K y optimizaron procesos clave en planificación, colaboración y reposición.",
  },
  {
    title: "¿Qué me diferencia de otros perfiles?",
    text: "Mi enfoque técnico-funcional, mi comunicación efectiva con stakeholders, y mi capacidad de convertir complejidad en soluciones escalables.",
  },
];

export default function QuestionsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Preguntas Clave</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {questions.map((q, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group min-h-[300px]"
          >
            <div className="w-16 h-16 mb-4 bg-[#d8fe51] rounded-full flex items-center justify-center text-black text-xl font-bold">
              {idx + 1}
            </div>
            <h3 className="text-md font-semibold mb-2">{q.title}</h3>
            <p className="text-sm text-gray-300">{q.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
