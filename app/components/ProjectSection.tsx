import { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import BrushStroke from "./BrushStroke";

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  flagship?: boolean;
}

export default function ProjectSection({ title, projects, flagship = false }: ProjectSectionProps) {
  return (
    <section className="section-padding" id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
      <div className="content-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <h2 className="section-title mb-4">{title}</h2>
            <BrushStroke className="w-full max-w-xs h-4" />
          </div>
        </ScrollReveal>

        {/* Project grid */}
        {flagship ? (
          /* Flagship cards — single column full width with more spacing */
          <div className="flex flex-col gap-12">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 100}>
                <ProjectCard project={project} flagship />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Asymmetric 2-column masonry-style layout */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 100} className={i % 2 === 1 ? "md:mt-12" : ""}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
