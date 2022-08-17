import React from "react";
import styles from "./styles.module.css";
import { HeaderLink } from "./HeaderLink";

export const HeaderMenu = () => {
  return (
    <menu className={styles.menu}>
      <ul>
        <HeaderLink href="/#about" title="About" id={1} />
        <HeaderLink href="/#projects" title="Projects" id={2} />
        <HeaderLink href="/#work" title="Work" id={3} />
        <HeaderLink href="/#contact" title="Contact" id={4} />
        <hr />
      </ul>
    </menu>
  );
};
