import { useMemo } from "react";
import styles from "./styles.module.css";
import { ResumeButton } from "./ResumeButton";
import { m } from "framer-motion";
import { homeVariants, itemVariant } from "./variants";
import { Home as HomeInterface } from "interfaces";
import { useTypedText } from "hooks";

interface Props {
  data: HomeInterface;
}

export const Home = ({ data }: Props) => {
  const { title1, title2, subtitle, description, specials } = useMemo(
    () => data,
    [data]
  );
  const text = useTypedText(specials);

  return (
    <section id="home" className={styles.home}>
      <m.div
        className={styles.aboutContainer}
        initial="hidden"
        animate="visible"
        variants={homeVariants}
      >
        <m.h4 variants={itemVariant}>{subtitle}</m.h4>
        <div className={styles.titleContainer}>
          <m.h1 tabIndex={0} variants={itemVariant}>
            {title1}
          </m.h1>
          <m.h2 className={styles.text} variants={itemVariant}>
            {title2}
            <span className={styles.typewritingText}>{text}</span>
          </m.h2>
        </div>
        <m.p variants={itemVariant}>{description}</m.p>
        <ResumeButton />
      </m.div>
    </section>
  );
};
