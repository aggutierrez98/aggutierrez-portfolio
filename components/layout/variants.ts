import { Variants } from "framer-motion";

export const sectionVariant: Variants = {
  hidden: {
    type: "spring",
  },
  visible: {
    transition: {
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.3,
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
