import { useContext } from "react";
import styles from "./styles.module.css";
import { AnimatePresence } from "framer-motion";
import { ToastContext } from "context/ToastContext";
import { Toast } from "./Toast";

interface ModalProps {
  autoDelete?: boolean;
  autoDeleteTime?: number;
  toastClassName?: string;
}

export const CustomToastsContainer = ({
  toastClassName,
  autoDelete = true,
  autoDeleteTime = 2000,
}: ModalProps) => {
  const { toastList, deleteToast } = useContext(ToastContext);

  return (
    <div id="#toast-container" className={styles.toastsContainer}>
      <AnimatePresence>
        {toastList?.map((toast, i) => (
          <Toast
            key={i}
            toast={toast}
            autoDelete={autoDelete}
            deleteTime={autoDeleteTime}
            toastClassName={toastClassName}
            deleteToast={deleteToast}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
