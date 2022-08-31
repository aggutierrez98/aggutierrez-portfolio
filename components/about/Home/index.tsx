import React, { useEffect, useMemo, useRef } from "react";
import styles from "./styles.module.css";
import TypeIt from "typeit";

interface Props {
  data: any;
}

export const Home = ({ data }: Props) => {
  const typeItRef = useRef(null);
  const strings = useMemo(
    () => [...data.specials.map((title: string) => `a ${title}.`)],
    [data.specials]
  );

  // console.log(strings);

  useEffect(() => {
    const delays = {
      beforeTyping: 375,
      afterTyping: 1500,
    };

    // @ts-ignore: TypeIt is not working with TS yet
    const typeIt = new TypeIt(typeItRef.current, {
      startDelay: delays.afterTyping,
      startDelete: true,
      breakLines: false,
      loop: true,
      nextStringDelay: 0,
      loopDelay: 0,
    }).delete(null, { delay: delays.beforeTyping });

    for (let i = 0; i < strings.length; i++) {
      typeIt.type(strings[i], { delay: delays.afterTyping });
      if (i !== strings.length - 1) {
        typeIt.delete(null, { delay: delays.beforeTyping });
      }
    }

    typeIt.go();
    return () => typeIt.destroy();
  }, [strings]);

  return (
    <section className={styles.aboutContainer} id="home">
      <h4>{data.subtitle}</h4>
      <div className={styles.titleContainer}>
        <h1>{data.title1}</h1>
        <h3 className={styles.text}>
          {data.title2}
          <span ref={typeItRef} className={styles.typewrittingText}>
            {strings[strings.length - 1]}
          </span>
          {/* <span className={styles.typewrittingText} id="typewritting-text">
            {content}
          </span> */}
        </h3>
      </div>
      <p>{data.description}</p>
    </section>
  );
};
