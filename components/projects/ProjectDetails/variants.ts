export const titleVariants = {
  hidden: {
    textShadow: "none",
  },
  visible: {
    textShadow: "0 0 5px #eeeeee",
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

export const sliderVariants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        opacity: { duration: 0.5 },
      },
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        bounce: 0.15,
        duration: 0.5,
      },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  tap: {
    cursor: "grabbing",
  },
};
