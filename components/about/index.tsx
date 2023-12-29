import styles from "./styles.module.css";
import { SkillsList } from "./SkillsList";
import { m } from "framer-motion";
import { sectionItemVariant, sectionVariant } from "components/layout/variants";
import { About as AboutInterface } from "interfaces";
import Image from "next/image";

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
          <m.h2 tabIndex={0} variants={sectionItemVariant}>
            {data.title}
          </m.h2>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <m.p variants={sectionItemVariant}>{data.description1}</m.p>
              <m.p variants={sectionItemVariant}>{data.description2}</m.p>
              <m.p variants={sectionItemVariant}>{data.description3}</m.p>
            </div>
            <m.div
              className={styles.imageContainer}
              variants={sectionItemVariant}
            >
              <Image
                src={data.avatar_img}
                alt="Agustin Gutierrez"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1000px) 40vw"
              />
              <div className={styles.block}></div>
            </m.div>
          </div>
        </div>
        <SkillsList data={data} />
      </m.div>
    </section>
  );
};
