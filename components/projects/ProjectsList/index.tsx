import React from "react";
import { ProjectCard } from "components";
import { Project } from "interfaces";
import styles from "./styles.module.css";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "../../layout/variants";

interface Props {
  projects: Project[];
}

export const ProjectsModule = ({ projects }: Props) => {
  return (
    <section id="projects" className={styles.projects}>
      <LazyMotion features={domAnimation}>
        <m.div
          className={styles.projectsContainer}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
        >
          <m.h2 tabIndex={2} variants={sectionItemVariant}>
            My Projects:
          </m.h2>
          <m.div variants={sectionItemVariant}>
            {projects.map((proyect, index) => (
              <ProjectCard key={index} proyectData={proyect} />
            ))}
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
};
