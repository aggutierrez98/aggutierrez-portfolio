import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
  title: string;
}

export const SeeMoreButton = ({ title }: Props) => {
  return (
    <Link key={title} href={`/projects/${title}`} passHref>
      <button className={styles.button}>
        <span className={styles.circle} aria-hidden="true">
          <span className={styles.iconArrow}></span>
        </span>
        <span className={styles.buttonText}>Learn More</span>
      </button>
    </Link>
  );
};
