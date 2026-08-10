import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section" id="project">
      <div className="projects-section__container">
        <div className="projects-section__header">
          <span className="projects-section__eyebrow">
            PROJECT PERUMAHAN
          </span>

          <h2>
            Pilihan Rumah Subsidi
            <br />
            <span>Untuk Keluarga Indonesia</span>
          </h2>

          <p>
            Temukan pilihan project perumahan Borneo Real Properti
            dengan lokasi strategis, harga terjangkau, dan proses
            pembelian yang mudah.
          </p>
        </div>

        <div className="projects-section__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};