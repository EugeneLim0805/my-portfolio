import React from "react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight text-gray-800">
          Skills
        </h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, categoryIdx) => (
            <div key={categoryIdx} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 text-center border-b border-gray-200 pb-2">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex items-center gap-2"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-800 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 