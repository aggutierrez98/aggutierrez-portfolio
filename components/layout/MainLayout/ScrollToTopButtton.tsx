import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";

export const ScrollToTopButtton = () => {
  const [showButton, setShowButton] = useState(false);
  const { route } = useRouter();
  const [inHomePage, setInHomePage] = useState(true);

  useEffect(() => {
    if (route === "/") setInHomePage(true);
    else setInHomePage(false);
  }, [route]);

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
          {inHomePage &&
            (showButton ? (
              <motion.button
                id="side-button-up"
                aria-label="Scroll to top"
                initial={{ opacity: 0, scaleX: 0 }}
                exit={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                whileHover={{
                  scale: 1.15,
                  // transition: {
                  //   delay: 0.5,
                  // },
                }}
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
                id="side-button-down"
                aria-label="Scroll to bottom"
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
            ))}
        </div>
      </AnimatePresence>
    </>
  );
};
