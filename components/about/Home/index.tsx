import { useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import TypeIt from "typeit";
import { ResumeButton } from "./ResumeButton";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { homeVariants, itemVariant } from "./variants";

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
        deleteSpeed: 75,
        cursorSpeed: 600,
        speed: 150,
      });
      typeIt.pause(1000);
      for (const special of memoizedData.specials) {
        typeIt.type(special).pause(2000).delete(special.length);
      }
      typeIt.go();
    }
  }, [memoizedData.specials]);

  return (
    <section id="home" className={styles.home}>
      <LazyMotion features={domAnimation}>
        <m.div
          className={styles.aboutContainer}
          initial="hidden"
          animate="visible"
          variants={homeVariants}
        >
          <m.h4 variants={itemVariant}>{memoizedData.subtitle}</m.h4>
          <div className={styles.titleContainer}>
            <m.h1
              tabIndex={0}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileFocus="hover"
            >
              {memoizedData.title1}
            </m.h1>
            <m.h2 className={styles.text} variants={itemVariant}>
              {memoizedData.title2}
              <span id="typing" className={styles.typewrittingText}></span>
            </m.h2>
          </div>
          <m.p variants={itemVariant}>{memoizedData.description}</m.p>
          <ResumeButton />
        </m.div>
      </LazyMotion>
    </section>
  );
};
