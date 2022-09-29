import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
  title: string;
}

export const LearnMoreButton = ({ title }: Props) => {
  return (
    <Link key={title} href={`/projects/${title}`} passHref scroll={false}>
      <button
        tabIndex={2}
        className={styles.button}
        onMouseUp={(e) =>
          e.button === 1 && window.open(`/projects/${title}`, "_blank")
        }
      >
        <span className={styles.circle} aria-hidden="true">
          <span className={styles.iconArrow}></span>
        </span>
        <span className={styles.buttonText}>Learn More</span>
      </button>
    </Link>
  );
};
