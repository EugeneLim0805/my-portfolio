import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight text-gray-800">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transform block"
            >
              <div className="h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-[11px] mb-4 line-clamp-3 font-medium">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 