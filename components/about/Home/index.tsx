import React, { useEffect, useMemo, useRef } from "react";
import styles from "./styles.module.css";
import TypeIt from "typeit";
import { ResumeButton } from "./ResumeButton";

interface Props {
  data: any;
}

export const Home = ({ data }: Props) => {
  const memoizedData = useMemo(() => data, [data]);

  useEffect(() => {
    if (document.getElementById("typing")?.innerHTML.length === 0) {
      // @ts-ignore: TypeIt is not working with TS yet
      const typeIt = new TypeIt("#typing", {
        loop: true,
        waitUntilVisible: true,
        cursorSpeed: 500,
        speed: 150,
        deleteSpeed: 50,
        lifeLike: false,
      });
      for (const str of memoizedData.specials) {
        typeIt.type(str).pause(200).delete(str.length);
      }
      typeIt.go();
    }
  }, [memoizedData.specials]);

  return (
    <section id="home" className={styles.home}>
      <div className={styles.aboutContainer}>
        <h4>{memoizedData.subtitle}</h4>
        <div className={styles.titleContainer}>
          <h1>{memoizedData.title1}</h1>
          <h3 className={styles.text}>
            {memoizedData.title2}
            <span id="typing" className={styles.typewrittingText}></span>
          </h3>
        </div>
        <p>{memoizedData.description}</p>
        <ResumeButton />
      </div>
    </section>
  );
};
