import { Work } from "interfaces";
import styles from "./styles.module.css";
import { WorkCard } from "./WorkCard";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "../../layout/variants";

interface Props {
  works: Work[];
}

export const WorkModule = ({ works }: Props) => {
  return (
    <section id="experience" className={styles.work}>
      <m.div
        className={styles.workContainer}
        variants={sectionVariant}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
      >
        <m.h2 tabIndex={0} variants={sectionItemVariant}>
          Experience
        </m.h2>
        <ul>
          {works.map((work, index) => (
            <WorkCard key={index} workData={work} />
          ))}
        </ul>
      </m.div>
    </section>
  );
};
