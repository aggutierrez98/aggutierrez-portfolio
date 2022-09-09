export const socialMediaVariants = {
  container: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  },
  item: {
    initial: {},
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      //   scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.15,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    hover: {
      boxShadow: `0 0 10px ${"#00adb5"}`,
      scale: 1.1,
      transition: {
        duration: 0.15,
      },
    },
  },
};
