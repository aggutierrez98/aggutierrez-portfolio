import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/ProjectCard.module.css";
import {
  domAnimation,
  LayoutGroup,
  LazyMotion,
  m,
  useAnimation,
} from "framer-motion";
import { TechsList } from "./TechsList";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 0.35 } },
  hidden: { opacity: 0 },
};

export const ProjectCard = ({
  proyectData: { title, description, image_url, techs },
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        ref={ref}
        whileHover={{ scale: 1.05 }}
        variants={squareVariants}
        animate={controls}
        initial="hidden"
        onMouseUp={(e) =>
          e.button === 1 && window.open(`/projects/${title}`, "_blank")
        }
      >
        <Link key={title} href={`/projects/${title}`} passHref>
          <div className={styles.cardContainer}>
            <div className={styles.textContainer}>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <TechsList techs={techs} />
            </div>
            {image_url && (
              <div className={styles.imageContainer}>
                <Image
                  priority
                  src={image_url}
                  layout="fill"
                  objectFit="contain"
                  alt={`${title}-example`}
                />
              </div>
            )}
          </div>
        </Link>
      </m.article>
    </LazyMotion>
  );
};
