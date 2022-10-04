import Image from "next/image";
import styles from "./styles.module.css";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { TechsList } from "components";
import { LearnMoreButton } from "./LearnMoreButton";
import { Project } from "interfaces";
import { boxVariants } from "./variants";
import Link from "next/link";

interface Props {
  proyectData: Project;
}

export const ProjectCard = ({
  proyectData: { title, description, image_url, techs, demo_url },
}: Props) => {
  return (
    <LazyMotion features={domAnimation}>
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
                <a tabIndex={2} href={demo_url}>
                  <span>{title}</span>
                </a>
              </Link>
            </h3>
            <p>{description}</p>
            <div className={styles.textBottom}>
              <TechsList techs={techs} />
              <LearnMoreButton title={title} />
            </div>
          </div>
          {image_url && (
            <div className={styles.imageContainer}>
              <Link href={demo_url} passHref>
                <a href={demo_url}>
                  <Image
                    src={image_url}
                    layout="fill"
                    objectFit="contain"
                    alt={`${title}-example`}
                  />
                </a>
              </Link>
            </div>
          )}
        </div>
      </m.article>
    </LazyMotion>
  );
};
