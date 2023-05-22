import { memo, useEffect } from "react";
import { m } from "framer-motion";
import styles from "./styles.module.css";
import { Toast as ToastType } from "context/ToastContext";
import { CloseSVGIcon } from "@react-md/material-icons";

interface ToastProps {
  toastClassName?: string;
  toast: ToastType;
  deleteToast: (id: number) => void;
  deleteTime: number;
  autoDelete: boolean;
}

const ToastBase = ({
  toast,
  toastClassName,
  deleteToast,
  deleteTime,
  autoDelete,
}: ToastProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete) deleteToast(toast.id);
    }, deleteTime);
    return () => {
      clearInterval(interval);
    };
  }, [deleteToast, deleteTime, autoDelete, toast.id]);

  return (
    <m.div
      className={styles.toastContent + " " + (toastClassName || "")}
      id={`toast-${toast.id}`}
      initial={{ opacity: 0, x: +200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{
        duration: 0.2,
        type: "spring",
        bounce: 100,
      }}
    >
      <button className={styles.button} onClick={() => deleteToast(toast.id)}>
        <CloseSVGIcon />
      </button>
      <div className={styles.iconContainer}>{toast.icon}</div>
      <div className={styles.textContainer}>
        <h4>{toast.title}</h4>
        <p>{toast.description}</p>
      </div>
    </m.div>
  );
};

export const Toast = memo(ToastBase);
