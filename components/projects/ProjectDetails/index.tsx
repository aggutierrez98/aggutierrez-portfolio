import styles from "./styles.module.css";
import { Project, Skill } from "interfaces";
import { TechsList, LinksList, CustomModal } from "components";
import { m } from "framer-motion";
import { titleVariants } from "./variants";
import { boxVariants } from "../ProjectCard/variants";
import { sectionVariant, sectionItemVariant } from "components/layout/variants";
import { ImagesCarrousel } from "./ImagesCarrousel";
import { useImages, useParagraphFromJSON } from "hooks";
import { useEffect, useState } from "react";
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
    images_data,
    techs,
  } = projectData;

  const paragraphRef = useParagraphFromJSON(description);
  const { modalOpen, imageToShow, openModal, closeModal, images } = useImages({
    image_url,
    images_data,
  });

  return (
    <>
      <m.div
        className={styles.detailsContainer}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
      >
        <m.h1 tabIndex={0} variants={sectionItemVariant}>
          {title}
        </m.h1>

        <ImagesCarrousel
          images={images}
          title={title}
          actionCallback={openModal}
        />

        <div className={styles.separator} />
        <div className={styles.descriptionContainer}>
          <m.h3 tabIndex={0} variants={sectionItemVariant}>
            Description
          </m.h3>
          <m.div
            className={styles.descriptionText}
            variants={sectionItemVariant}
          >
            <m.p ref={paragraphRef} />
          </m.div>
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
      </m.div>

      <CustomModal
        onClose={closeModal}
        visible={modalOpen}
        overlayClassName={styles.modalOverlay}
        buttonClassName={styles.modalButton}
        contentClassName={styles.modelContent}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {imageToShow && <img src={imageToShow} alt={`${title}-example`} />}
      </CustomModal>
    </>
  );
};
