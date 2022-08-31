import { Work } from "interfaces";
import styles from "./workCard.module.css";

interface Props {
  workData: Work;
}

export const WorkCard = ({
  workData: { place, tasks, time, title },
}: Props) => {
  return (
    <li className={styles.cardContainer}>
      <div className={styles.leftSide}>
        <p>{time}</p>
      </div>
      <div className={styles.timeLineContainer}>
        <span className={styles.previousLine}></span>
        <span className={styles.circle}></span>
        <span className={styles.line}></span>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.timeRight}>{time}</p>
        <h4>{title}</h4>
        <p>{place}</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={styles.taskContainer}>
              <div className={styles.number}>
                <span>0{index}</span>
              </div>
              <span className={styles.task}>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
