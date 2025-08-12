export interface Experience {
  company: string;
  position: string;
  department: string;
  period: string;
  description: string;
  logo: string;
  link: string;
  technologies?: string[];
  emoji?: string;
}

export const experiences: Experience[] = [
  {
    company: "Samsung SDI",
    position: "Software Engineer Intern",
    department: "Data Intelligence Department",
    period: "June 2024 - August 2024",
    description: "• Developed defect prediction model processing 800M+ EV battery records utilizing Pandas, NumPy, Scikit-learn, and XGBoost\n• Optimized processing time from 40s to 10s using Scikit-learn regression and data preprocessing techniques\n• Created interactive dashboards with Matplotlib/Seaborn for battery performance analysis",
    logo: "/samsung.png",
    link: "https://www.samsungsdi.com/",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn"],
    emoji: "📊"
  },
  {
    company: "DEEPNOID",
    position: "Software Engineer Intern",
    department: "AI Security",
    period: "April 2024 - June 2024",
    description: "• Developed image preprocessing pipeline for 10K+ X-ray images using PIL, Base64, and PostgreSQL\n• Automated image processing workflows, reducing preparation time by 50% and cutting data handling overhead by 30%\n • Engineered a metadata management system with PostgreSQL and Docker to streamline AI dataset organization.",
    logo: "/deepnoid.jpeg",
    link: "https://www.deepnoid.com/?lang=en",
    technologies: ["Python", "PIL", "Base64", "PostgreSQL", "Docker", "REST APIs", "Swagger"],
    emoji: "🛡️"
  }
];
