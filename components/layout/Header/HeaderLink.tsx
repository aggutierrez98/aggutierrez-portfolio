import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  href: string;
  title: string;
  id: number;
}

export const HeaderLink = ({ href, title, id }: Props) => {
  const { asPath } = useRouter();
  const active = asPath === href;

  return (
    <li className={`${active ? styles[`item${id}`] : ""}`}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </li>
  );
};
