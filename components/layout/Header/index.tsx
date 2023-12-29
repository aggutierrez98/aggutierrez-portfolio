import { HeaderMenu } from "./HeaderMenu";
import styles from "./styles.module.css";
import { useScrollingUp } from "hooks";
import { Logo } from "components";
import { m } from "framer-motion";
import { headerVariant } from "./variants";

export const Header = () => {
  const isScrollingUp = useScrollingUp();
  const showClass = !isScrollingUp ? styles.hidden : "";

  return (
    <m.header
      className={`${styles.header} ${showClass}`}
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
