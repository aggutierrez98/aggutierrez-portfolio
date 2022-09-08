import Image from "next/image";
import styles from "./styles.module.css";
import { domAnimation, LazyMotion, m, useAnimation } from "framer-motion";
import { TechsList } from "components";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SeeMoreButton } from "./SeeMoreButton";
import { Project } from "interfaces";
import { boxVariants } from "./variants";

interface Props {
  proyectData: Project;
}

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
        variants={boxVariants}
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
            <p>{description}</p>
            <div className={styles.textBottom}>
              <TechsList techs={techs} />
              <SeeMoreButton title={title} />
            </div>
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
