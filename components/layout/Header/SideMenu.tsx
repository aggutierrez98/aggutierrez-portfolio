import React, { RefObject } from "react";
import styles from "./sideMenu.module.css";
import { HeaderLink } from "./HeaderLink";
import { AnimatePresence, motion, m } from "framer-motion";
import { headerSideListVariant } from "./variants";

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
        <m.aside
          ref={refValue}
          id="side-menu"
          className={styles.menu}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={headerSideListVariant}
        >
          <ul>
            <HeaderLink href="/#home" title="Home" toogle={toogle} isSideLink />
            <HeaderLink
              href="/#about"
              title="About"
              toogle={toogle}
              isSideLink
            />
            <HeaderLink
              href="/#projects"
              title="Projects"
              toogle={toogle}
              isSideLink
            />
            <HeaderLink
              href="/#experience"
              title="Experience"
              toogle={toogle}
              isSideLink
            />
            <HeaderLink
              href="/#contact"
              title="Contact"
              toogle={toogle}
              isSideLink
            />
          </ul>
        </m.aside>
      )}
    </AnimatePresence>
  );
};
