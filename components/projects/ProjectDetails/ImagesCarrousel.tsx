import React, { useState } from "react";
import { AnimatePresence, motion, m } from "framer-motion";
import styles from "./styles.module.css";
import { sectionItemVariant } from "@c/layout/variants";
import { sliderVariants } from "./variants";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useImageCarrousel } from "hooks";
import { swipeConfidenceThreshold, swipePower } from "helpers";

interface Props {
  data: {
    count: number;
    folder: string;
  };
  actionCallback?: (arg0: any) => void;
}

export const ImagesCarrousel = ({
  data: { count, folder },
  actionCallback,
}: Props) => {
  const images = Array.from(
    { length: count },
    (_, i) => `${folder}/${i + 1}.jpg`
  );

  const {
    direction,
    page,
    setNextPage,
    setPrevPage,
    toogleDragging,
    isDragging,
  } = useImageCarrousel(images);

  return (
    <m.div className={styles.carrouselContainer} variants={sectionItemVariant}>
      <motion.div className={styles.carrouselImageBox}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            onClick={(e) => {
              if (isDragging) return;
              e.stopPropagation();
              if (actionCallback) actionCallback(images[page]);
            }}
            key={page}
            src={images[page]}
            custom={direction}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileTap="tap"
            drag="x"
            onDragStart={toogleDragging}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) setNextPage();
              else if (swipe > swipeConfidenceThreshold) setPrevPage();
              toogleDragging();
            }}
          />
        </AnimatePresence>
      </motion.div>
      <div className={styles.imageBackground}></div>
      <button
        className={styles.prev}
        onClick={() => setPrevPage()}
        disabled={page === 0}
      >
        <MdArrowBackIosNew />
      </button>
      <button
        className={styles.next}
        onClick={() => setNextPage()}
        disabled={page === images.length - 1}
      >
        <MdArrowForwardIos />
      </button>
    </m.div>
  );
};
