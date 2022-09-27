export const headerListVariant = {
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};
export const headerItemVariant = {
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

export const headerSideListVariant = {
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
