import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
