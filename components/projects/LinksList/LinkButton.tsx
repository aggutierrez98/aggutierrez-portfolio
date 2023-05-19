import { VscLink, VscGithub } from "react-icons/vsc";
import Link from "next/link";
import styles from "./styles.module.css";

interface Props {
  text: string;
  link: string;
  deploy?: boolean;
}

export const LinkButton = ({ text, link, deploy = false }: Props) => {
  return (
    <Link
      href={link}
      passHref
      scroll={false}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      {deploy ? <VscLink /> : <VscGithub />}
      {text}
    </Link>
  );
};
