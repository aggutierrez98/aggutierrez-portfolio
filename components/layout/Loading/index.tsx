import { AnimatePresence, motion, m } from "framer-motion";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface Props {
  isLoading?: boolean;
}

const LoadingBase = () => {
  return (
    <m.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className={styles.loader}
    ></m.span>
  );
};

export const Loading = ({ isLoading = true }: Props) => {
  if (typeof document === "undefined") return <></>;

  return createPortal(
    <AnimatePresence>{isLoading && <LoadingBase />}</AnimatePresence>,
    document?.getElementById("modal")!
  );
};
