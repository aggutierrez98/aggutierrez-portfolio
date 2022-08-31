import { VscLink, VscGithub } from "react-icons/vsc";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  text: string;
  link: string;
  deploy?: boolean;
}

export const GlassButton = ({ text, link, deploy = false }: Props) => {
  return (
    <Link href={link} passHref>
      <a className={styles.button} target="_blank" rel="noopener noreferrer">
        {deploy ? <VscLink /> : <VscGithub />}
        <p>{text}</p>
      </a>
    </Link>
  );
};
