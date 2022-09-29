import { Work } from "interfaces";
import styles from "./workCard.module.css";
import { m } from "framer-motion";
import { sectionItemVariant } from "../../layout/variants";
import { timeLineVariant ,
  tasksContainerVariant,
  taskItemVariant,
  containerVariant,
} from "./variants";

interface Props {
  workData: Work;
}

export const WorkCard = ({
  workData: { place, tasks, time, title },
}: Props) => {
  return (
    <m.li
      className={styles.cardContainer}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
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
        <h4>{title}</h4>
        <p>{place}</p>
        <m.ul variants={tasksContainerVariant}>
          {tasks.map((task, index) => (
            <m.li
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
