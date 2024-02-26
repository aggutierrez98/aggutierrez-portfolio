import { Work } from "interfaces";
import styles from "./workCard.module.css";
import { m } from "framer-motion";
import {
  timeLineVariant,
  tasksContainerVariant,
  taskItemVariant,
  containerVariant,
} from "./variants";

interface Props {
  workData: Work;
}

export const WorkCard = ({
  workData: { place, tasks, time, title, place_url },
}: Props) => {
  return (
    <m.li
      className={styles.cardContainer}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.leftSide}>
        <p>{time}</p>
      </div>
      <div className={styles.timeLineContainer}>
        <m.span className={styles.previousLine} variants={timeLineVariant} />
        <span className={styles.circle}></span>
        <m.span className={styles.line} variants={timeLineVariant} />
      </div>
      <div className={styles.rightSide}>
        <p className={styles.timeRight}>{time}</p>
        <h3>{title}</h3>
        {place_url ? (
          <a href={place_url} target="_blank" rel="noopener noreferrer">
            {place}
          </a>
        ) : (
          <p> {place}</p>
        )}
        <m.ul variants={tasksContainerVariant}>
          {tasks.map((task, index) => (
            <m.li
              tabIndex={0}
              key={index}
              className={styles.taskContainer}
              variants={taskItemVariant}
            >
              <div className={styles.number}>
                <span>{index + 1}</span>
              </div>
              <span className={styles.task}>{task}</span>
            </m.li>
          ))}
        </m.ul>
      </div>
    </m.li>
  );
};
