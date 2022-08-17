import React from "react";
import { ProjectCard } from "components";
import { Project } from "interfaces";

interface Props {
  projects: Project[];
}

export const ProjectsModule = ({ projects }: Props) => {
  return (
    <div>
      <h1 id="projects">Projects</h1>

      {projects.map((proyect, index) => (
        <ProjectCard key={index} proyectData={proyect} />
      ))}
    </div>
  );
};
