import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ExpandLessSVGIcon } from "@react-md/material-icons";
import { useRouter } from "next/router";
import { useShowScrollButton } from "hooks";

export const ScrollToTopButton = () => {
  const showButton = useShowScrollButton();

  return (
    <AnimatePresence exitBeforeEnter>
      {showButton && (
        <m.button
          id="side-button-up"
          aria-label="Scroll to top"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className={styles.goToTopButton}
          onClick={() => {
            document.getElementById("main-layout")!.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ExpandLessSVGIcon />
        </m.button>
      )}
    </AnimatePresence>
  );
};
