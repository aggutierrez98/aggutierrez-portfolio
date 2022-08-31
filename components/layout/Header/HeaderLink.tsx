import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  href: string;
  title: string;
  id: number;

  toogle?: () => void;
}

export const HeaderLink = ({ href, title, id, toogle }: Props) => {
  const { asPath } = useRouter();
  const active = asPath === href;

  return (
    <li className={`${active ? styles[`item${id}`] : ""}`}>
      <Link href={href}>
        <a onClick={toogle}>{title}</a>
      </Link>
    </li>
  );
};
