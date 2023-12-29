import { Variants } from "framer-motion";

export const headerVariant: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const headerListVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export const headerItemVariant: Variants = {
  hidden: (isSide: boolean) => {
    let variants = {
      opacity: 0,
      x: 0,
      y: 0,
    };
    if (isSide) {
      variants.x = 20;
    } else {
      variants.y = -20;
    }
    return variants;
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

export const headerSideListVariant: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: "75%",
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: { width: 0, opacity: 0 },
};
