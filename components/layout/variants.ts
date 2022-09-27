export const sectionVariant = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const sectionItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
