import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

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
      {/* <h3>{about.subtitle}</h3>
      <div className={styles.titleContainer}>
        <h1>{about.title1}</h1>
        <h2 className={styles.text}>
          {about.title2}
          <span className={styles.typewrittingText} id="typewritting-text">
            {content}
          </span>
        </h2>
      </div>
      <p>{about.description}</p> */}

      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <ul>
          {data.skills?.map((skill: string, index: number) => {
            const Icon = dynamic(
              async () =>
                await import(`public/assets/svg/mini-icons/${skill}.svg`)
            );

            return (
              <li key={index} className={styles.skillCard}>
                <Icon />
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
