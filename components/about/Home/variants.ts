export const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.75,
      staggerChildren: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
  hover: {
    textShadow: `0 0 10px #eeeeee`,
    transition: {
      duration: 0.15,
    },
  },
  focus: {
    textShadow: `0 0 10px #eeeeee`,
    transition: {
      duration: 0.15,
    },
  },
};
