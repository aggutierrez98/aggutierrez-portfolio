import { RefObject } from "react";
import styles from "./headerButtonMenu.module.css";

interface Props {
  action: () => void;
  value: boolean;
  refValue: RefObject<HTMLButtonElement>;
}

export const HeaderButtonMenu = ({ action, value, refValue }: Props) => {
  return (
    <button
      tabIndex={0}
      className={styles.bar}
      ref={refValue}
      onClick={action}
      aria-label="open menu"
    >
      <input
        type="checkbox"
        className={styles.check}
        checked={value}
        disabled
      />
      <span className={styles.top}></span>
      <span className={styles.middle}></span>
      <span className={styles.bottom}></span>
    </button>
  );
};
