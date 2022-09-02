import React from "react";
import { ProjectCard } from "components";
import { Project } from "interfaces";
import styles from "./styles.module.css";

interface Props {
  projects: Project[];
}

export const ProjectsModule = ({ projects }: Props) => {
  return (
    <div className={styles.projectsContainer} id="projects">
      <h2>My Projects:</h2>

      {projects.map((proyect, index) => (
        <ProjectCard key={index} proyectData={proyect} />
      ))}
    </div>
  );
};
