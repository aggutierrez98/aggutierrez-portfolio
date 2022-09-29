import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const ScrollToTopButtton = () => {
  const [showButton, setShowButton] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setShowButton(false);
      else
        setTimeout(() => {
          setShowButton(true);
        }, 600);
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
    <>
      <AnimatePresence exitBeforeEnter>
        <div>
          {showButton ? (
            <motion.button
              tabIndex={2}
              id="side-button-up"
              initial={{ opacity: 0, scaleX: 0 }}
              exit={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              whileHover={{ scale: 1.15 }}
              whileFocus={{ scale: 1.15 }}
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
          ) : (
            <motion.button
              tabIndex={1}
              id="side-button-down"
              initial={{ opacity: 0, scaleX: 0 }}
              exit={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.25 }}
              className={styles.goToTopButton}
              onClick={() => {
                setShowButton(false);
                document
                  .getElementById("about")!
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaChevronDown />
            </motion.button>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};
