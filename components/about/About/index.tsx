import styles from "./styles.module.css";
import { SkillsList } from "./SkillsList";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { sectionItemVariant, sectionVariant } from "../../layout/variants";

interface Props {
  data: any;
}

export const About = ({ data }: Props) => {
  return (
    <section id="about">
      <LazyMotion features={domAnimation}>
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
              <div className={styles.imageContainerInner}>
                <div className={styles.circle}></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    "https://res.cloudinary.com/aggutierrez/image/upload/e_colorize:45,co_rgb:00adb5/v1664817205/Portfolio/avatar-image3.png"
                  }
                  alt="Agustin Gutierrez"
                />
              </div>
            </m.div>
          </div>
          <SkillsList data={data} />
        </m.div>
      </LazyMotion>
    </section>
  );
};
