import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeaderMenu } from "./HeaderMenu";
import styles from "./styles.module.css";
import { useScrollingUp } from "hooks";
import Logo from "public/assets/logo-agg.svg";
import { LazyMotion, motion, domAnimation, m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 1,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
};

export const Header = () => {
  const isScrollingUp = useScrollingUp();
  const showClass = !isScrollingUp ? styles.hidden : "";

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        className={`${styles.header} ${showClass}`}
        variants={variants}
        animate="visible"
        initial="hidden"
      >
        <div className={styles.headerContainer}>
          <Link href="/" passHref scroll={false}>
            <Logo tabIndex={1} />
          </Link>
          <HeaderMenu />
        </div>
      </m.header>
    </LazyMotion>
  );
};
