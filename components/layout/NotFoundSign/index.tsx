import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export const NotFoundSign = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <Link href="/" passHref>
        <button>Back To Home</button>
      </Link>
    </div>
  );
};
