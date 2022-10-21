import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
  title: string;
}

export const LearnMoreButton = ({ title }: Props) => {
  return (
    <Link key={title} href={`/projects/${title}`} passHref scroll={false}>
      <button
        className={styles.button}
        onMouseUp={(e) =>
          e.button === 1 && window.open(`/projects/${title}`, "_blank")
        }
      >
        Learn More
      </button>
    </Link>
  );
};
