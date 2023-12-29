import { Variants } from "framer-motion";

export const sectionVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      type: "tween",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const sectionItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
