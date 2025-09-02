import React from 'react';
import { Linkedin } from 'lucide-react';

import QuestionsSection from './QuestionsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

export default function ProfessionalProfile() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-12 space-y-20">
      {/* Header y botón LinkedIn */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Diego Meléndez</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          IT Supply Chain Expert & Digital Architect with end-to-end implementation experience.
        </p>
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#d8fe51] text-black font-semibold hover:opacity-90 transition"
        >
          <Linkedin size={18} /> Ver perfil en LinkedIn
        </a>
      </section>

      <QuestionsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </div>
  );
}
