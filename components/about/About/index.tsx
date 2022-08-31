import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { ResumeButton } from "./ResumeButton";
import { SkillsList } from "./SkillsList";

interface Props {
  data: any;
}

export const About = ({ data }: Props) => {
  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h2>{data.title}</h2>
          <p>{data.description1}</p>
          <ResumeButton />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/assets/avatar-image-placeholder.svg"}
            width={300}
            height={300}
            alt="Aggutierrez image"
          />
        </div>
      </div>
      <SkillsList data={data} />
    </section>
  );
};
