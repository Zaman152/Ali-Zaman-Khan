"use client";

import { useState } from "react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  flagship?: boolean;
}

export default function ProjectCard({ project, flagship = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card ${flagship ? "flagship-card" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pb-5">
        <h3 className={flagship ? "project-title-flagship" : "project-title"}>
          {project.name}
        </h3>

        <p className={`project-desc mt-3 ${flagship ? "text-base leading-relaxed" : ""}`}>
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-pill">{tech}</span>
          ))}
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-5">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                {project.links.length > 1 ? `View ${i + 1} →` : "View →"}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bottom hairline rule */}
      <div
        className="hairline"
        style={{
          opacity: hovered ? 1 : 0.5,
          transform: hovered ? "scaleX(1)" : "scaleX(0.95)",
          transition: "opacity 400ms ease, transform 400ms ease",
        }}
      />
    </article>
  );
}
