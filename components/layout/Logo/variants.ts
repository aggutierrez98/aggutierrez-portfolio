import { Variants } from "framer-motion";

export const svgVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    // transition: {
    //   duration: 0.25
    // }
  },
};

export const logoVariant: Variants = {
  initial: { pathLength: 0, filter: "none", pathOffset: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 15, ease: "easeOut" },
  },
};

// export const logoVariant: Variants = {
//   initial: { pathLength: 0, opacity: 0 },
//   visible: {
//     pathLength: 1,
//     opacity: 1,
//     transition: { duration: .25, ease: "easeIn" },
//   },
// };
