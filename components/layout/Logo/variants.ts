export const svgVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const boxVariant = {
  initial: { pathLength: 0, filter: "none" },
  visible: {
    pathLength: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.8 },
  },
};

export const logoVariant = {
  initial: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeIn", delay: 0.8 },
  },
};
