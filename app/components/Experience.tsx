import React from "react";
import { experiences } from "../data/experience";

const Experience = () => (
  <section id="experience" className="py-20 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-light text-center mb-16">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row md:items-center gap-8 items-start">
            <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain rounded-lg" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-gray-600">
                    @{" "}
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 hover:underline transition-colors"
                    >
                      {exp.company}
                    </a>
                  </p>
                </div>
                <span className="text-gray-500 text-sm mt-1 md:mt-0 bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{exp.description}</p>
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
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