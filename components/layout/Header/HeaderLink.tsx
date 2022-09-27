import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { m } from "framer-motion";
import { headerItemVariant } from "./variants";
import useActiveSectionId from "hooks/useActiveSection";

interface Props {
  href: string;
  title: string;
  toogle?: () => void;
  isSideLink?: boolean;
}

export const HeaderLink = ({
  href,
  title,
  toogle,
  isSideLink = false,
}: Props) => {
  const scrollingSection = useActiveSectionId();
  const active = scrollingSection === href.split("#")[1];

  return (
    <m.li
      className={`${active ? styles.active : ""}`}
      custom={isSideLink}
      variants={headerItemVariant}
    >
      <Link href={href} scroll={false}>
        <a onClick={toogle}>{title}</a>
      </Link>
    </m.li>
  );
};
