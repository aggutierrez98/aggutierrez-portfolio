import Image from "next/image";
import styles from "./styles.module.css";
import { domAnimation, LazyMotion, m, useAnimation } from "framer-motion";
import { TechsList } from "components";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SeeMoreButton } from "./SeeMoreButton";
import { Project } from "interfaces";

interface Props {
  proyectData: Project;
}

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 0.35 } },
  hidden: { opacity: 0 },
};

const techsVariants = {
  container: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
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
        variants={squareVariants}
        animate={controls}
        initial="hidden"
        // // onMouseUp={(e) =>
        // //   e.button === 1 && window.open(`/projects/${title}`, "_blank")
        // // }
      >
        <div className={styles.cardContainer}>
          <div className={styles.textContainer}>
            {/* <h3>{title}</h3> */}
            <h3 id="style-2" data-replace={title}>
              <span>{title}</span>
            </h3>
            <h4>{description}</h4>
            <TechsList techs={techs} variants={techsVariants} />
            <SeeMoreButton title={title} />
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
      </m.article>
    </LazyMotion>
  );
};
