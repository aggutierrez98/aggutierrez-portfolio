import Image from "next/image";
import styles from "./styles.module.css";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { TechsList } from "components";
import { LearnMoreButton } from "./LearnMoreButton";
import { Project, Skill } from "interfaces";
import { boxVariants } from "./variants";
import Link from "next/link";
import parse from "html-react-parser";
import { memo } from "react";

interface Props {
  projectData: Project;
}

const InitProjectCard = ({
  projectData: { title, description, image_url, images_data, techs, demo_url },
}: Props) => {
  return (
    <m.article
      variants={boxVariants}
      whileInView="visible"
      initial="hidden"
      exit="exit"
    >
      <div className={styles.cardContainer}>
        <div className={styles.textContainer}>
          <h3 id="style-2" data-replace={title}>
            <Link href={demo_url} passHref>
              <a href={demo_url}>
                <span className={styles.title}>{title}</span>
              </a>
            </Link>
          </h3>
          <div className={styles.descriptionText}>{parse(description)}</div>
          <div className={styles.textBottom}>
            <TechsList techs={techs as Skill[]} />
            <LearnMoreButton title={title} />
          </div>
        </div>
        {(image_url || images_data) && (
          <div className={styles.imageContainer}>
            <Link href={demo_url} passHref>
              <a href={demo_url}>
                <Image
                  src={image_url ? image_url : `${images_data?.folder}/1.jpg`}
                  layout="fill"
                  objectFit="contain"
                  alt={`${title}-example`}
                />
                {/* <img src={image_url} alt={`${title}-example`}></img> */}
              </a>
            </Link>
          </div>
        )}
      </div>
    </m.article>
  );
};

export const ProjectCard = memo(InitProjectCard);
