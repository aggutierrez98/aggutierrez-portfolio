import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/ProjectCard.module.css";
import { motion } from "framer-motion";
import { getTechColor } from "../helpers/getTechColor";

interface Proyect {
  title: string;
  description: string;
  github_url: string;
  demo_url: string;
  image_url?: string;
  techs: string[];
}

interface Props {
  proyectData: Proyect;
}

export const ProjectCard = ({
  proyectData: { title, description, github_url, demo_url, image_url, techs },
}: Props) => {
  return (
    <article
      onMouseUp={(e) => {
        if (e.button === 1) {
          window.open(`projects/${title}`, "_blank");
        }
      }}
    >
      <Link key={title} href={`projects/${title}`} passHref>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={styles.cardContainer}
        >
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <div className={styles.techsContainer}>
              {techs?.map((name) => (
                <motion.div
                  layout
                  whileHover={{ width: "100px" }}
                  initial={{ width: "auto" }}
                  transition={{ duration: 0.15 }}
                  className={styles.techTag}
                  key={name}
                  title={`${name}-icon`}
                >
                  <Image
                    src={`/assets/svg/mini-icons/${name}.svg`}
                    width={25}
                    height={25}
                    alt={`${name}-icon`}
                  />
                  <p style={{ color: getTechColor(name) }}>{name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {image_url && (
            <div className={styles.imageContainer}>
              <Image
                src={image_url}
                layout="fill"
                objectFit="contain"
                alt={`${title}-example`}
              />
            </div>
          )}
        </motion.div>
      </Link>
    </article>
  );
};
