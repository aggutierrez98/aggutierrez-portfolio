import Image from "next/image";
import React from "react";
import { Project } from "interfaces";
import styles from "./styles.module.css";
import { TechsList, LinksList } from "components";

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
    <div className={styles.detailsContainer}>
      <h1>{title}</h1>
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
        <h3>Description</h3>
        <p>{description}</p>
        <div>
          <h2></h2>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.techStackContainer}>
        <h3>Tech Stack</h3>
        <TechsList techs={techs} detailsPage />
      </div>

      <div className={styles.separator} />

      <LinksList
        github_repo_back_url={back_github_url}
        github_repo_front_url={front_github_url}
        demo_url={demo_url}
        server_url={server_url}
      />
    </div>
  );
};
