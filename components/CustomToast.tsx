import { createPortal } from "react-dom";
import { useContext, useEffect } from "react";
import styles from "../styles/components/CustomToast.module.css";
import { XIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContext } from "../context/ToastContext";

interface ModalProps {
  autoDelete?: boolean;
  autoDeleteTime?: number;
  toastClassName?: string;
}

const ToastBase = ({
  toastClassName,
  autoDelete = true,
  autoDeleteTime = 5000,
}: ModalProps) => {
  const { toastList, deleteToast } = useContext(ToastContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, deleteToast]);

  return (
    <div className={styles.toastsContainer}>
      <AnimatePresence>
        {toastList.map((toast, i) => (
          <motion.div
            className={styles.toastContent + " " + (toastClassName || "")}
            key={i}
            initial={{ opacity: 0, x: +200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              duration: 0.2,
              type: "spring",
              bounce: 100,
            }}
          >
            <button
              className={styles.button}
              onClick={() => deleteToast(toast.id)}
            >
              <XIcon />
            </button>
            <div className={styles.iconContainer}>{toast.icon}</div>
            <div className={styles.textContainer}>
              <h4>{toast.title}</h4>
              <p>{toast.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const CustomToast = ({
  toastClassName,
  autoDelete,
  autoDeleteTime,
}: ModalProps) => {
  if (typeof document === "undefined") return <></>;

  return createPortal(
    <ToastBase
      toastClassName={toastClassName}
      autoDelete={autoDelete}
      autoDeleteTime={autoDeleteTime}
    />,
    document?.getElementById("toast")!
  );
};
