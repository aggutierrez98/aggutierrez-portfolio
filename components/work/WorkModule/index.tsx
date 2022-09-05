import { Work } from "interfaces";
import styles from "./styles.module.css";
import { WorkCard } from "./WorkCard";

interface Props {
  works: Work[];
}

export const WorkModule = ({ works }: Props) => {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.workContainer}>
        <h2>Work</h2>
        <ul>
          {works.map((work, index) => (
            <WorkCard key={index} workData={work} />
          ))}
        </ul>
      </div>
    </section>
  );
};
