import { AnimatePresence, m } from "framer-motion";
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
                <FaChevronUp />
              </m.button>
            ) : (
              <m.button
                id="side-button-down"
                aria-label="Scroll to bottom"
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 1,
                  },
                }}
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
              </m.button>
            ))}
        </div>
      </AnimatePresence>
    </>
  );
};
