import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

const LoadingBase = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className={styles.loader}
    ></motion.span>
  );
};

export const Loading = ({ loading = true }) => {
  if (typeof document === "undefined") return <></>;

  return createPortal(
    <AnimatePresence>{loading && <LoadingBase />}</AnimatePresence>,
    document?.getElementById("modal")!
  );
};
