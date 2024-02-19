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
    projects.slice(0, 3)
  );
  const [page] = useState(0);

  useEffect(() => {
    if (!isProjectsPage) setProjectsToRender(projects.slice(0, 3));
    else setProjectsToRender(projects);
    return () => setProjectsToRender([]);
  }, [isProjectsPage, projects, page]);

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

        {!isProjectsPage && (
          <Link
            href={`/projects`}
            passHref
            scroll={false}
            legacyBehavior
            prefetch={false}
          >
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
        )}
      </m.div>
    </section>
  );
};
