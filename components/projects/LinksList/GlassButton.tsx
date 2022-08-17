import { ExternalLinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
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
        {deploy ? (
          <ExternalLinkIcon />
        ) : (
          <Image
            src={"/assets/svg/social-media/github-icon.svg"}
            width={30}
            height={30}
            alt="github-image"
          />
        )}
        <p>{text}</p>
      </a>
    </Link>
  );
};
