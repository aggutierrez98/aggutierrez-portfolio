import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { TechsList } from "components";
import { Project, Skill } from "interfaces";
import { LearnMoreButton } from "./LearnMoreButton";
import styles from "./styles.module.css";
import { boxVariants } from "./variants";
import { useParagraphFromJSON } from "hooks";

interface Props {
  projectData: Project;
}

const InitProjectCard = ({
  projectData: { title, description, image_url, images_data, techs, demo_url },
}: Props) => {
  const paragraphRef = useParagraphFromJSON(description);

  return (
    <m.article
      variants={boxVariants}
      whileInView="visible"
      initial="hidden"
      exit="exit"
    >
      <div className={styles.cardContainer}>
        {(image_url || images_data) && (
          <div className={styles.imageContainer}>
            <Link href={demo_url} passHref className={styles.imageLink}>
              <Image
                src={image_url ? image_url : `${images_data?.folder}/1.png`}
                alt={`${title}-example`}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1000px) 50vw"
              />
            </Link>
          </div>
        )}

        <div className={styles.textContainer}>
          <h3 id="style-2" data-replace={title}>
            <Link href={demo_url} passHref>
              <span className={styles.title}>{title}</span>
            </Link>
          </h3>
          <div className={styles.descriptionText}>
            <p ref={paragraphRef}></p>
          </div>
          <div className={styles.textBottom}>
            <TechsList techs={techs as Skill[]} />
            <LearnMoreButton title={title} />
          </div>
        </div>
      </div>
    </m.article>
  );
};

export const ProjectCard = memo(InitProjectCard);
