import { memo } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { TechsList } from "components";
import { Project, Skill } from "interfaces";
import { LearnMoreButton } from "./LearnMoreButton";
import styles from "./styles.module.css";
import { boxVariants } from "./variants";

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
