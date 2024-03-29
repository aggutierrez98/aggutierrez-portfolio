import Link from "next/link";
import styles from "./styles.module.css";
import { m } from "framer-motion";
import { headerItemVariant } from "./variants";
import { useActiveSection } from "hooks";

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
  const [, active] = useActiveSection(href);

  return (
    <m.li
      className={`${active ? styles.active : ""}`}
      custom={isSideLink}
      variants={headerItemVariant}
      onClick={toogle}
    >
      <Link href={href} scroll={false} prefetch={false}>
        {title}
      </Link>
    </m.li>
  );
};
