import { HeaderMenu } from "./HeaderMenu";
import styles from "./styles.module.css";
import { useScrollingUp } from "hooks";
import { Logo } from "components";
import { LazyMotion, domAnimation, m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 1,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
};

export const Header = () => {
  const isScrollingUp = useScrollingUp();
  const showClass = !isScrollingUp ? styles.hidden : "";

  return (
    <m.header
      className={`${styles.header} ${showClass}`}
      variants={variants}
      animate="visible"
      initial="hidden"
    >
      <div className={styles.headerContainer}>
        <Logo className={styles.logo} />
        <HeaderMenu />
      </div>
    </m.header>
  );
};
