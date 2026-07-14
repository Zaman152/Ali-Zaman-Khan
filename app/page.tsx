import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import { projectSections } from "./data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {projectSections.map((section) => (
        <ProjectSection
          key={section.id}
          title={section.title}
          projects={section.projects}
          flagship={section.id === "custom"}
        />
      ))}
      <Contact />
    </main>
  );
}
