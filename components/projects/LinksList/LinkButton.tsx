import { VscLink, VscGithub } from "react-icons/vsc";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  text: string;
  link: string;
  deploy?: boolean;
}

export const LinkButton = ({ text, link, deploy = false }: Props) => {
  return (
    <Link href={link} passHref scroll={false}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        tabIndex={2}
      >
        {deploy ? <VscLink /> : <VscGithub />}
        {text}
      </a>
    </Link>
  );
};
