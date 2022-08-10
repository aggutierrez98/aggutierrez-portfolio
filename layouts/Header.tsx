import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../components/Logo";
import styles from "../styles/MainLayout.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <Logo color={"#f0f5f9"} />
        </a>
      </Link>

      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </menu>
    </header>
  );
};
