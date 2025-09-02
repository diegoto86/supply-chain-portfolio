import React from 'react';

const educationItems = [
  "Micromaster Supply Chain Management – MIT EDX",
  "Master Supply Chain – ESAN",
  "Bachelor Degree en Negocios Internacionales – USMP",
  "Diplomado en Logística – ESAN",
  "CSCP – APICS",
  "Snowflake SnowPro Core",
  "Associate Project Management Professional",
  "Kinaxis and o9 Certification Courses",
];

export default function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Educación y Certificaciones</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {educationItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 h-[300px] flex items-center justify-center text-center"
          >
            <p className="text-gray-200 text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
