import React, { RefObject } from "react";
import styles from "./headerButtonMenu.module.css";

interface Props {
  action: () => void;
  value: boolean;
  refValue: RefObject<HTMLButtonElement>;
}

export const HeaderButtonMenu = ({ action, value, refValue }: Props) => {
  return (
    <button className={styles.bar} ref={refValue} onClick={action}>
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
