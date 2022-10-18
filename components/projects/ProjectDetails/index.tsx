import Image from "next/image";
import React from "react";
import { Project, Skill } from "interfaces";
import styles from "./styles.module.css";
import { TechsList, LinksList } from "components";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { boxVariants } from "../ProjectCard/variants";
import { titleVariants } from "./variants";

interface Props {
  projectData: Project;
}

export const ProjectDetails = ({ projectData }: Props) => {
  const {
    demo_url,
    server_url,
    description,
    front_github_url,
    back_github_url,
    title,
    image_url,
    techs,
  } = projectData;

  return (
    <LazyMotion features={domAnimation}>
      <div className={styles.detailsContainer}>
        <m.h1
          tabIndex={0}
          initial="hidden"
          whileHover="visible"
          whileFocus="visible"
          variants={titleVariants}
        >
          {title}
        </m.h1>
        {image_url && (
          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <Image
                priority
                src={image_url}
                layout="fill"
                objectFit="contain"
                alt={`${title}-example`}
              />
            </div>
            <div className={styles.imageBackground}></div>
          </div>
        )}

        <div className={styles.separator} />

        <div className={styles.descriptionContainer}>
          <m.h3
            initial="hidden"
            whileHover="visible"
            whileFocus="visible"
            variants={titleVariants}
            tabIndex={0}
          >
            Description
          </m.h3>
          <p>{description}</p>
        </div>

        <div className={styles.separator} />

        <m.div
          variants={boxVariants}
          className={styles.techStackContainer}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
        >
          <m.h3
            initial="hidden"
            animate="none"
            whileHover="visible"
            whileFocus="visible"
            variants={titleVariants}
            tabIndex={0}
          >
            Tech Stack
          </m.h3>
          <TechsList techs={techs as Skill[]} detailsPage />
        </m.div>

        <div className={styles.separator} />

        <LinksList
          github_repo_back_url={back_github_url}
          github_repo_front_url={front_github_url}
          demo_url={demo_url}
          server_url={server_url}
        />
      </div>
    </LazyMotion>
  );
};
