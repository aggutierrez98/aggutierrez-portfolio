import { createPortal } from "react-dom";
import { useOutsideAndEscapeKeyAlerter } from "hooks";
import { useRef } from "react";
import styles from "./styles.module.css";
import { MdOutlineClose } from "react-icons/md";
import { AnimatePresence, motion, m } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  overlayClassName?: string;
  contentClassName?: string;
  buttonClassName?: string;
}

const ModalBase = ({
  children,
  onClose,
  overlayClassName,
  contentClassName,
  buttonClassName,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useOutsideAndEscapeKeyAlerter(modalRef, onClose, buttonRef);

  return (
    <m.div
      className={styles.modalOverlay + " " + (overlayClassName || "")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <div
        className={styles.modalContent + " " + (contentClassName || "")}
        ref={modalRef}
      >
        <button
          className={styles.button + " " + (buttonClassName || "")}
          onClick={onClose}
          ref={buttonRef}
        >
          <MdOutlineClose />
        </button>
        {children}
      </div>
    </m.div>
  );
};

export const CustomModal = ({
  children,
  onClose,
  visible,
  overlayClassName,
  contentClassName,
  buttonClassName,
}: ModalProps) => {
  if (typeof document === "undefined") return <></>;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <ModalBase
          onClose={onClose}
          visible={visible}
          overlayClassName={overlayClassName}
          contentClassName={contentClassName}
          buttonClassName={buttonClassName}
        >
          {children}
        </ModalBase>
      )}
    </AnimatePresence>,
    document?.getElementById("modal")!
  );
};
