import { ProjectCard } from "components";
import { Project } from "interfaces";
import { useEffect, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "components/layout/variants";
import styles from "./styles.module.css";

interface Props {
  projects: Project[];
  isProjectsPage?: boolean;
}

export const ProjectsModule = ({ projects, isProjectsPage = false }: Props) => {
  const [projectsToRender, setProjectsToRender] = useState(
    projects.slice(0, 4)
  );
  const [page, setPage] = useState(0);
  const [hasMoreProjects, setHasMoreProjects] = useState(true);

  useEffect(() => {
    if (!isProjectsPage) setProjectsToRender(projects.slice(0, 4));
    else {
      setProjectsToRender(() => {
        const newProjects = projects.slice(0, (page + 1) * 4);
        return newProjects;
      });
    }

    return () => setProjectsToRender([]);
  }, [isProjectsPage, projects, page]);

  useEffect(() => {
    if (projectsToRender.length % 4 !== 0) setHasMoreProjects(false);
    return () => setHasMoreProjects(true);
  }, [projectsToRender]);

  return (
    <section id="projects" className={styles.projects}>
      <m.div
        className={styles.projectsContainer}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
      >
        <m.h2 tabIndex={0} variants={sectionItemVariant}>
          {isProjectsPage ? "Projects Page:" : "My Projects:"}
        </m.h2>
        <m.div variants={sectionItemVariant}>
          {projectsToRender.map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </m.div>

        {!isProjectsPage ? (
          <Link href={`/projects`} passHref scroll={false} legacyBehavior>
            <m.div className={styles.showMoreButton}>
              <button
                onMouseUp={(e) =>
                  e.button === 1 && window.open(`/projects`, "_blank")
                }
              >
                SHOW MORE
              </button>
              ;
            </m.div>
          </Link>
        ) : (
          hasMoreProjects && (
            <m.div className={styles.showMoreButton}>
              <button
                onClick={() => {
                  setPage((prevPage) => prevPage + 1);
                }}
              >
                LOAD MORE
              </button>
              ;
            </m.div>
          )
        )}
      </m.div>
    </section>
  );
};
