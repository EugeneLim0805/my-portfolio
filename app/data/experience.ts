export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
  link: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Samsung SDI",
    position: "Software Engineer Intern",
    period: "June 2024 - August 2024",
    description: "TBD",
    logo: "/samsung.png",
    link: "https://www.samsungsdi.com/",
    technologies: ["Python", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Seaborn", "Data Analysis", "Machine Learning"]
  },
  {
    company: "DEEPNOID",
    position: "Software Engineer Intern",
    period: "April 2024 - June 2024",
    description: "TBD",
    logo: "/deepnoid.jpeg",
    link: "https://www.deepnoid.com/?lang=en",
    technologies: ["Python", "REST APIs","Java", "Spring Boot", "PostgreSQL", "Docker", "Git", "Agile"]
  }
];
