import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
  title: string;
}

export const SeeMoreButton = ({ title }: Props) => {
  return (
    <Link key={title} href={`/projects/${title}`} passHref scroll={false}>
      <button
        className={styles.button}
        onMouseUp={(e) =>
          e.button === 1 && window.open(`/projects/${title}`, "_blank")
        }
      >
        <span className={styles.circle} aria-hidden="true">
          <span className={styles.iconArrow}></span>
        </span>
        <span
          className={styles.buttonText}
          onClick={() => {
            const scrollY = document.getElementById("main-layout")?.scrollTop;
            localStorage.setItem("prevScroll", JSON.stringify(scrollY));
          }}
        >
          Learn More
        </span>
      </button>
    </Link>
  );
};
