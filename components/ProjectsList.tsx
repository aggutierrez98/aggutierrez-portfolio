import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../interfaces/index";

interface Props {
  projects: Project[];
}

export const ProjectsList = ({ projects }: Props) => {
  return (
    <div>
      {projects.map((proyect, index) => (
        <ProjectCard key={index} proyectData={proyect} />
      ))}
    </div>
  );
};
