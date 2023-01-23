import styles from "./styles.module.css";
import { SkillsList } from "./SkillsList";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { sectionItemVariant, sectionVariant } from "components/layout/variants";
import { About as AboutInterface } from "interfaces";

interface Props {
  data: AboutInterface;
}

export const About = ({ data }: Props) => {
  return (
    <section id="about">
      <m.div
        className={styles.about}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariant}
      >
        <div className={styles.aboutContainer}>
          <div className={styles.textContainer}>
            <m.h2 tabIndex={0} variants={sectionItemVariant}>
              {data.title}
            </m.h2>
            <m.p variants={sectionItemVariant}>{data.description1}</m.p>
          </div>
          <m.div
            className={styles.imageContainer}
            variants={sectionItemVariant}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.avatar_img} alt="Agustin Gutierrez" />
            <div className={styles.block}></div>
          </m.div>
        </div>
        <SkillsList data={data} />
      </m.div>
    </section>
  );
};
