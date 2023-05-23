import { LaunchSVGIcon } from "@react-md/material-icons";
import Link from "next/link";
import styles from "./styles.module.css";

interface Props {
  text: string;
  link: string;
}

export const LinkButton = ({ text, link }: Props) => {
  return (
    <Link
      href={link}
      passHref
      scroll={false}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      prefetch={false}
    >
      <LaunchSVGIcon /> {text}
    </Link>
  );
};
