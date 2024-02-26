export const containerVariant = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.3,
    },
  },
};

export const timeLineVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const tasksContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      duration: 0.35,
      staggerChildren: 0.3,
      type: "spring",
      //   stiffness: 400,
      //   damping: 10,
    },
  },
};

export const taskItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
