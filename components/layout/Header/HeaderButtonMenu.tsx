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
      <div className={styles.top}></div>
      <div className={styles.middle}></div>
      <div className={styles.bottom}></div>
    </button>
  );
};
