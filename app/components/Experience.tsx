const experiences = [
  {
    logo: "/samsung.png",
    title: "Software Engineer Intern",
    company: "Samsung SDI",
    link: "https://www.samsungsdi.com/",
    period: "June 2024 - August 2024",
    projects: [
      { icon: "🤖🚗📊 ", name: "Data Intelligence Group" },
    ],
    description: "TBD"
  },
  {
    logo: "/deepnoid.jpeg",
    title: "Software Engineer Intern",
    company: "DEEPNOID",
    link: "https://www.deepnoid.com/?lang=en",
    period: "April 2024 - June 2024",
    projects: [
      { icon: "🛠", name: "AI Security" },
    ],
    description: "TBD"
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-light text-center mb-16">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-8 rounded-lg shadow flex flex-col md:flex-row md:items-center gap-8 items-start">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <span className="font-semibold text-lg">{exp.title}</span>
                  <span className="ml-2 text-gray-500">@ <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a></span>
                </div>
                <span className="text-gray-400 text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>
              <div className="mb-2 space-y-1">
                {exp.projects.map((proj, i) => (
                  <div key={i} className="flex items-center text-base">
                    <span className="mr-2">{proj.icon}</span> {proj.name}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-2 whitespace-pre-line">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 