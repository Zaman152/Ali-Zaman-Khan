import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import PetalCanvas from "./components/PetalCanvas";
import { projectSections } from "./data/projects";

export default function Home() {
  return (
    <>
      <PetalCanvas />
      <main className="relative z-10">
        <Hero />
        <About />
        {projectSections.map((section, i) => (
          <ProjectSection
            key={section.id}
            title={section.title}
            projects={section.projects}
            index={i + 1}
            flagship={section.id === "custom"}
          />
        ))}
        <Contact />
      </main>
    </>
  );
}
