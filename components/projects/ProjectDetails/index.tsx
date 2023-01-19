import Image from "next/image";
import { Project, Skill } from "interfaces";
import styles from "./styles.module.css";
import { TechsList, LinksList, CustomModal } from "components";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { titleVariants } from "./variants";
import { boxVariants } from "../ProjectCard/variants";
import { sectionVariant, sectionItemVariant } from "components/layout/variants";
import parse from "html-react-parser";
import { ImagesCarrousel } from "./ImagesCarrousel";
import { useImageModal } from "hooks";

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

  const { modalOpen, imageToShow, openModal, closeModal } = useImageModal();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={styles.detailsContainer}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
      >
        <m.h1 tabIndex={0} variants={sectionItemVariant}>
          {title}
        </m.h1>
        {image_url && (
          <m.div
            className={styles.imageContainer}
            variants={sectionItemVariant}
          >
            <div className={styles.imageBox}>
              <Image
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(image_url);
                }}
                priority
                src={image_url}
                layout="fill"
                objectFit="contain"
                alt={`${title}-example`}
              />
            </div>
            <div className={styles.imageBackground}></div>
          </m.div>
        )}

        {images_data && (
          <ImagesCarrousel data={images_data} actionCallback={openModal} />
        )}

        <div className={styles.separator} />

        <div className={styles.descriptionContainer}>
          <m.h3 tabIndex={0} variants={sectionItemVariant}>
            Description
          </m.h3>
          <m.div
            className={styles.descriptionText}
            variants={sectionItemVariant}
          >
            {parse(description)}
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
        {imageToShow && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageToShow} alt={`${title}-example`} />
          </>
        )}
      </CustomModal>
    </LazyMotion>
  );
};
