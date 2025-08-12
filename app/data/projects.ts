export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/project-image.png",
    github: "https://github.com/username/project",
    demo: "https://demo-link.com"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/project-image.png",
    github: "https://github.com/username/project",
    demo: "https://demo-link.com"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/project-image.png",
    github: "https://github.com/username/project",
    demo: "https://demo-link.com"
  }
]; 