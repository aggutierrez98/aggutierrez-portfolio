import React, { useState } from "react";
import { AnimatePresence, motion, m } from "framer-motion";
import styles from "./styles.module.css";
import { sectionItemVariant } from "@c/layout/variants";
import { sliderVariants } from "./variants";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface Props {
  data: {
    count: number;
    folder: string;
  };
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImagesCarrousel = ({ data: { count, folder } }: Props) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const images = Array.from(
    { length: count },
    (_, i) => `${folder}/${i + 1}.jpg`
  );

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const setNextPage = () => {
    if (page !== images.length - 1) paginate(1);
  };

  const setPrevPage = () => {
    if (page !== 0) paginate(-1);
  };

  return (
    <m.div className={styles.carrouselContainer} variants={sectionItemVariant}>
      <motion.div className={styles.carrouselImageBox}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[page]}
            custom={direction}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) setNextPage();
              else if (swipe > swipeConfidenceThreshold) setPrevPage();
            }}
          />
        </AnimatePresence>
      </motion.div>
      <div className={styles.imageBackground}></div>
      <button className={styles.prev} onClick={() => setPrevPage()}>
        <MdArrowBackIosNew />
      </button>
      <button className={styles.next} onClick={() => setNextPage()}>
        <MdArrowForwardIos />
      </button>
    </m.div>
  );
};
