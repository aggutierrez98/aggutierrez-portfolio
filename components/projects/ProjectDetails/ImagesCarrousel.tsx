import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { AnimatePresence, m } from "framer-motion";
import { sectionItemVariant } from "@c/layout/variants";
import { sliderVariants } from "./variants";
import {
  ArrowBackSVGIcon,
  ArrowForwardSVGIcon,
} from "@react-md/material-icons";
import { useImageCarrousel } from "hooks";
import { swipeConfidenceThreshold, swipePower, blurImageSrc } from "helpers";

interface Props {
  images: string[];
  title: string;
  actionCallback?: (arg0: any) => void;
}

export const ImagesCarrousel = ({ images, title, actionCallback }: Props) => {
  const {
    direction,
    page,
    setNextPage,
    setPrevPage,
    // toggleDragging,
    // isDragging,
  } = useImageCarrousel(images);

  return (
    <>
      {images.length > 0 ? (
        images.length === 1 ? (
          <m.div
            className={styles.imageContainer}
            variants={sectionItemVariant}
          >
            <div className={styles.imageBox}>
              <Image
                onClick={(e) => {
                  e.stopPropagation();
                  if (actionCallback) actionCallback(0);
                }}
                priority
                src={images[0]}
                alt={`${title}-example`}
                placeholder="blur"
                blurDataURL={blurImageSrc}
                fill
                sizes="100vw"
              />
            </div>
            <div className={styles.imageBackground}></div>
          </m.div>
        ) : (
          <m.div
            className={styles.carrouselContainer}
            variants={sectionItemVariant}
            initial="hidden"
            whileInView="visible"
          >
            <div className={styles.carrouselImageBox}>
              <AnimatePresence initial={false}>
                <m.img
                  onClick={(e) => {
                    // if (isDragging) return;
                    e.stopPropagation();
                    if (actionCallback) actionCallback(page);
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
                  // onDragStart={toggleDragging}
                  // dragConstraints={{ left: 0, right: 0 }}
                  // dragElastic={0.55}
                  // onDragEnd={(_, { offset, velocity }) => {
                  //   const swipe = swipePower(offset.x, velocity.x);
                  //   if (swipe < -swipeConfidenceThreshold) setNextPage();
                  //   else if (swipe > swipeConfidenceThreshold) setPrevPage();
                  //   toggleDragging();
                  // }}
                />
              </AnimatePresence>
            </div>
            <div className={styles.imageBackground}></div>
            <button
              className={styles.prev}
              onClick={() => setPrevPage()}
              disabled={page === 0}
            >
              <ArrowBackSVGIcon />
            </button>
            <button
              className={styles.next}
              onClick={() => setNextPage()}
              disabled={page === images.length - 1}
            >
              <ArrowForwardSVGIcon />
            </button>
          </m.div>
        )
      ) : (
        <></>
      )}
    </>
  );
};
