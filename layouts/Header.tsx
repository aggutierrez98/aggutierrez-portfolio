import Link from "next/link";
import React from "react";
import styles from "../styles/MainLayout.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <h1 className={styles.header__title}>Aggutierrez</h1>
        </a>
      </Link>

      <menu>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/proyects">
          <a>Proyects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </menu>
    </header>
  );
};
