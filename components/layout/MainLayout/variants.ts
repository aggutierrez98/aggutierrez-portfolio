import { Variants } from "framer-motion";

export const socialMediaVariants: {
  container: Variants;
  item: Variants;
} = {
  container: {
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    initial: { scale: 1 },
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.15,
        type: "spring",
      },
    },
  },
};
