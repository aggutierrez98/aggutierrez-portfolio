import { Variants } from "framer-motion";

export const homeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
