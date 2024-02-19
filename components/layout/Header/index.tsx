import { HeaderMenu } from "./HeaderMenu";
import styles from "./styles.module.css";
import { Logo } from "components";
import { m } from "framer-motion";
import { headerVariant } from "./variants";
// import { useScrollingUp } from "hooks";

export const Header = () => {
  // const isScrollingUp = useScrollingUp();
  // const showClass = !isScrollingUp ? styles.hidden : "";

  return (
    <m.header
      className={`${styles.header}`}
      variants={headerVariant}
      animate="visible"
      initial="hidden"
    >
      <div className={styles.headerContainer}>
        <Logo />
        <HeaderMenu />
      </div>
    </m.header>
  );
};
