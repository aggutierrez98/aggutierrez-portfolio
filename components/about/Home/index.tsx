import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  data: any;
}

export const Home = ({ data }: Props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    let endTime = 0;
    const textLoad = () => {
      let time = 0;
      data.specials.map((text: string) => {
        setTimeout(() => {
          setContent(text);
          const bodyStyles = document.body.style;
          bodyStyles.setProperty(
            "--typewrittetext-length",
            String(text.length)
          );
        }, time);
        time = time + 5000;
      });
      endTime = time;
    };
    textLoad();
    setInterval(textLoad, endTime);
  }, [data.specials]);

  return (
    <section className={styles.aboutContainer} id="home">
      <h3>{data.subtitle}</h3>
      <div className={styles.titleContainer}>
        <h1>{data.title1}</h1>
        <h2 className={styles.text}>
          {data.title2}
          <span className={styles.typewrittingText} id="typewritting-text">
            {content}
          </span>
        </h2>
      </div>
      <p>{data.description}</p>
    </section>
  );
};
