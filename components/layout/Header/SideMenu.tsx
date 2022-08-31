import React, { RefObject } from "react";
import styles from "./sideMenu.module.css";
import { HeaderLink } from "./HeaderLink";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isShowing: boolean;
  refValue: RefObject<HTMLDivElement>;
  toogle: () => void;
}

export const SideMenu = ({
  isShowing = true,
  refValue,

  toogle,
}: Props) => {
  return (
    <AnimatePresence>
      {isShowing && (
        <motion.aside
          ref={refValue}
          id="side-menu"
          className={styles.menu}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: "75%",
            opacity: 1,
          }}
          transition={{ duration: 0.2 }}
          exit={{ width: 0, opacity: 0 }}
        >
          <ul>
            <HeaderLink href="/#about" title="About" id={1} toogle={toogle} />
            <HeaderLink
              href="/#projects"
              title="Projects"
              id={2}
              toogle={toogle}
            />
            <HeaderLink href="/#work" title="Work" id={3} toogle={toogle} />
            <HeaderLink
              href="/#contact"
              title="Contact"
              id={4}
              toogle={toogle}
            />
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
