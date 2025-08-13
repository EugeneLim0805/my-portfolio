import React from "react";
import { experiences } from "../data/experience";

const Experience = () => (
  <section id="experience" className="py-20 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight text-gray-800">Experience</h2>
      <div className="space-y-6 -mt-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-start gap-6 items-start border border-gray-100">
            <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-base text-gray-600">
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
                <span className="text-gray-500 text-sm mt-1 md:mt-0 bg-gray-50 px-3 py-1 rounded-md">{exp.period}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3 font-medium text-sm whitespace-pre-line">{exp.description}</p>
                                   {exp.technologies && (
                       <div className="flex flex-wrap gap-2">
                         {exp.technologies.map((tech, techIdx) => (
                           <span
                             key={techIdx}
                             className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
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