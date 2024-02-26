import React from "react";
import Image from "next/image";
import { blurImageSrc } from "helpers";
import styles from "./styles.module.css";
import { m } from "framer-motion";
import { sectionItemVariant } from "@c/layout/variants";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Keyboard,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface Props {
  images: string[];
  title: string;
  actionCallback?: (arg0: any) => void;
}

export const ImagesCarrousel = ({ images, title, actionCallback }: Props) => {
  return (
    <m.div
      className={styles.carrouselContainer}
      variants={sectionItemVariant}
      initial="hidden"
      whileInView="visible"
    >
      <Swiper
        style={{
          width: "100%",
          height: "100%",
        }}
        tag="section"
        modules={[Navigation, Scrollbar, A11y, Keyboard, EffectCreative]}
        keyboard
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation
        scrollbar={{
          draggable: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              if (actionCallback) actionCallback(index);
            }}
          >
            <div className={styles.carrouselImageBox}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`${title}-illustration-${index}`}
                src={image}
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </m.div>
  );
};
