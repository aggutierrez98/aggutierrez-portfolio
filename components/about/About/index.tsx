import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { SkillsList } from "./SkillsList";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { homeVariants, itemVariant } from "../Home/variants";
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
              <m.h2 variants={sectionItemVariant}>{data.title}</m.h2>
              <m.p variants={sectionItemVariant}>{data.description1}</m.p>
            </div>
            <m.div
              className={styles.imageContainer}
              variants={sectionItemVariant}
            >
              <Image
                src={"/assets/avatar-image-placeholder.svg"}
                width={300}
                height={300}
                alt="Aggutierrez image"
              />
            </m.div>
          </div>
          <SkillsList data={data} />
        </m.div>
      </LazyMotion>
    </section>
  );
};
