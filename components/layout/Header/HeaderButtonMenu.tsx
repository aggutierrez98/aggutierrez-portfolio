import React, { RefObject } from "react";
import styles from "./headerButtonMenu.module.css";

interface Props {
  action: () => void;
  value: boolean;
  refValue: RefObject<HTMLLabelElement>;
}

export const HeaderButtonMenu = ({ action, value, refValue }: Props) => {
  return (
    <label
      htmlFor="check"
      className={styles.bar}
      ref={refValue}
      onClick={action}
    >
      <input
        id="check"
        type="checkbox"
        className={styles.check}
        checked={value}
        disabled
      />
      <span className={styles.top}></span>
      <span className={styles.middle}></span>
      <span className={styles.bottom}></span>
    </label>
  );
};
