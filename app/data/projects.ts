export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Modern and responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and a clean layout that presents my projects, work experience, and technical expertise.",
    image: "/my.png",
    link: "https://github.com/EugeneLim0805/my-portfolio"
  },
  {
    id: 2,
    title: "Open DevSecOps 2.0",
    description: "Interactive Boeing's DevSecOps curriculum transforming passive reading into engaging learning with quizzes, progress tracking, hands-on labs, and certificate system.",
    image: "/2.0.png",
    link: "https://opendevsecops2.github.io/open-devsecops-2.0/"
  },
  {
    id: 3,
    title: "Seattle Cultural Directory",
    description: "Interactive map platform promoting cultural diversity in Seattle by showcasing cultural landmarks and heritage sites. Built with React, Firebase, and Google Maps API.",
    image: "/scd.png",
    link: "https://seattle-cultural-directory.web.app/"
  },
  {
    id: 4,
    title: "ReNu",
    description: "Sustainable e-commerce platform selling short-dated food and defective products at discounted prices. Built with React, Firebase, and Google Maps API.",
    image: "/Renu.png",
    link: "https://github.com/EugeneLim0805/ReNu"
  }
]; 