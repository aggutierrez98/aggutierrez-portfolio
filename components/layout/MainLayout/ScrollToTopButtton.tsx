import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTopButtton = () => {
  const [showButton, setShowButton] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setShowButton(false);
      else setShowButton(true);
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const topSection = document.getElementById("top-section")!;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(topSection);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          id="side-button"
          initial={{ opacity: 0, scaleX: 0 }}
          exit={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.25 }}
          className={styles.goToTopButton}
          onClick={() => {
            document.getElementById("main-layout")!.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FaChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
