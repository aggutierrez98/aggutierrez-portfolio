import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeaderMenu } from "./HeaderMenu";
import { Logo } from "../Logo";
import styles from "./styles.module.css";
import { useScrollingUp } from "hooks";

export const Header = () => {
  const isScrollingUp = useScrollingUp();
  const cls = !isScrollingUp ? styles.hidden : "";
  return (
    <header className={`${styles.header} ${cls}`}>
      <div className={styles.headerContainer}>
        <Link href="/" passHref>
          <a>
            <Logo color={"#00adb5"} />
          </a>
        </Link>
        <HeaderMenu />
      </div>
    </header>
  );
};
