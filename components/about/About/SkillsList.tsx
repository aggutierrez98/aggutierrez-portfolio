import { m } from "framer-motion";
import styles from "./styles.module.css";
import { sectionItemVariant } from "../../layout/variants";
import { SkillCard } from "./SkillCard";
import { Skill } from "../../../interfaces/index";

export const SkillsList = ({ data }: { data: any }) => {
  return (
    <div className={styles.skillsContainer}>
      <h3>My skills</h3>
      <div className={styles.skillsTable}>
        {data.skills.map((skillSet: Skill[], index: number) => {
          let name = "";
          if (index === 0) name = "Frontend";
          if (index === 1) name = "Backend";
          if (index === 2) name = "Database";
          if (index === 3) name = "Others";

          return (
            <m.div
              key={index}
              className={styles.skillsSection}
              variants={sectionItemVariant}
            >
              <h3>{name}</h3>
              <ul>
                {skillSet.map((skill, index: number) => {
                  return <SkillCard skill={skill} key={index} />;
                })}
              </ul>
            </m.div>
          );
        })}
      </div>
    </div>
  );
};
