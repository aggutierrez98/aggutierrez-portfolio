import React from "react";
import { ProjectCard } from "components";
import { Project } from "interfaces";
import styles from "./styles.module.css";

interface Props {
  projects: Project[];
}

export const ProjectsModule = ({ projects }: Props) => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <h2>My Projects:</h2>

        {projects.map((proyect, index) => (
          <ProjectCard key={index} proyectData={proyect} />
        ))}
      </div>
    </section>
  );
};
