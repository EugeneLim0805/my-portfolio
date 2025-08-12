import React from "react";
import { experiences } from "../data/experience";

const Experience = () => (
  <section id="experience" className="py-16 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
      <div className="space-y-6 -mt-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-start gap-6 items-start border border-gray-100">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 transition-colors"
                    >
                      {exp.company}
                    </a>
                    <span className="text-gray-500"> • {exp.emoji && <span className="mr-1">{exp.emoji}</span>}{exp.department}</span>
                  </p>
                </div>
                <span className="text-gray-500 text-xs mt-1 md:mt-0 bg-gray-50 px-2 py-1 rounded-md">{exp.period}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2 font-medium text-xs whitespace-pre-line">{exp.description}</p>
                                   {exp.technologies && (
                       <div className="flex flex-wrap gap-1">
                         {exp.technologies.map((tech, techIdx) => (
                           <span
                             key={techIdx}
                             className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-md"
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                     )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 