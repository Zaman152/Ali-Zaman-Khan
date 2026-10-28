"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { projectSections, type Project } from "../data/projects";

const categories = [
  { id: "all", label: "All" },
  { id: "n8n", label: "N8N" },
  { id: "make", label: "Make.com" },
  { id: "ghl", label: "GHL" },
  { id: "zapier", label: "Zapier" },
  { id: "custom", label: "Custom" },
];

function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.links && project.links.length > 0;
  return (
    <div className="card reveal">
      {/* Category */}
      {project.flagship && (
        <span
          className="pill"
          style={{ marginBottom: 12, display: "inline-block", background: "rgba(59,130,246,0.12)", color: "rgba(160,200,255,0.9)" }}
        >
          Flagship
        </span>
      )}
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: project.flagship ? 22 : 18,
          color: "var(--text-primary)",
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        {project.name}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "rgba(244,246,251,0.5)",
          lineHeight: 1.6,
          marginBottom: 16,
        }}
      >
        {project.description}
      </p>
      {/* Stack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: hasLinks ? 16 : 0,
        }}
      >
        {project.stack.map((s) => (
          <span key={s} className="pill">
            {s}
          </span>
        ))}
      </div>
      {/* Link */}
      {hasLinks && (
        <a
          href={project.links[0]}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 14,
            color: "var(--text-primary)",
            textDecoration: "none",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View project →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const ref = useScrollReveal();

  const filtered =
    filter === "all"
      ? projectSections.flatMap((s) => s.projects)
      : projectSections.find((s) => s.id === filter)?.projects ?? [];

  const displayProjects = filtered.slice(0, 12);

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "80px 0", position: "relative" }}
    >
      <div className="content-container">
        <h2
          className="heading-section reveal"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          Selected work
        </h2>

        {/* Filter tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              className={`tab ${filter === c.id ? "tab-active" : ""}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {displayProjects.map((p, i) => (
            <ProjectCard key={`${p.name}-${i}`} project={p} />
          ))}
        </div>

        {filtered.length > 12 && (
          <p
            style={{
              textAlign: "center",
              marginTop: 32,
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            Showing 12 of {filtered.length} projects
          </p>
        )}
      </div>
    </section>
  );
}
