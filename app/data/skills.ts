export interface Skill {
  id: number;
  name: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Programming Languages
const programmingLanguages: Skill[] = [
  {
    id: 1,
    name: "Python",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    id: 2,
    name: "Java",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    id: 5,
    name: "HTML",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    id: 6,
    name: "CSS",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    id: 7,
    name: "SQL",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    id: 8,
    name: "R",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
  },
];

// Technologies & Tools
const technologiesAndTools: Skill[] = [
  {
    id: 9,
    name: "React",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    id: 10,
    name: "Node.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 11,
    name: "Next.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 12,
    name: "Express",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    id: 13,
    name: "Spring Boot",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
  },
  {
    id: 14,
    name: "Firebase",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    id: 15,
    name: "MongoDB",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 16,
    name: "PostgreSQL",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 17,
    name: "Git",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    id: 18,
    name: "Docker",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    id: 19,
    name: "Azure",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
  },
  {
    id: 20,
    name: "Postman",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    id: 21,
    name: "Pandas",
    image: "https://pandas.pydata.org/static/img/pandas_mark.svg",
  },
  {
    id: 22,
    name: "NumPy",
    image: "https://numpy.org/images/logo.svg",
  },
  {
    id: 23,
    name: "Scikit-learn",
    image: "https://scikit-learn.org/stable/_images/scikit-learn-logo-notext.png",
  },
  {
    id: 24,
    name: "Matplotlib",
    image: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png",
  },
  {
    id: 25,
    name: "MATLAB",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg",
  },
  {
    id: 26,
    name: "Tableau",
    image: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  }
];

// 카테고리별로 그룹화
export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: programmingLanguages
  },
  {
    name: "Technologies & Tools",
    skills: technologiesAndTools
  }
];

// 모든 스킬을 하나의 배열로도 export (기존 호환성)
export const skills: Skill[] = [
  ...programmingLanguages,
  ...technologiesAndTools
]; 