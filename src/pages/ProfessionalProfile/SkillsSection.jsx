import React from 'react';

const skillGroups = {
  'Supply Chain Tools': ['o9 Solutions', 'Kinaxis', 'SAP', 'E2open', 'Slimstock'],
  'Data & Cloud': ['Snowflake', 'Azure', 'SSIS', 'Power BI', 'SQL'],
  'Programming & Dev': ['Python', 'Git', 'JavaScript', 'Node.js', 'REST APIs'],
  'Certifications & Concepts': ['CSCP (APICS)', 'Project Management', 'IBP', 'S&OP', 'Demand Planning'],
};

export default function SkillsSection() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold text-center">Habilidades Técnicas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skillGroups).map(([groupName, skills], idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-[#d8fe51] mb-4 text-center">{groupName}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#d8fe51] text-black text-sm font-medium px-4 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
