import Link from "next/link";
import styles from "./styles.module.css";
import { m } from "framer-motion";
import { sectionItemVariant, sectionVariant } from "../variants";

export const NotFoundSign = () => {
  return (
    <m.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={sectionVariant}
    >
      <m.h2 variants={sectionItemVariant}>404</m.h2>
      <m.h3 variants={sectionItemVariant}>Page Not Found</m.h3>
      <Link href="/" passHref legacyBehavior>
        <m.button variants={sectionItemVariant}>Back To Home</m.button>
      </Link>
    </m.div>
  );
};
