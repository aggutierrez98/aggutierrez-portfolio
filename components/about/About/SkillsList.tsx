import { m } from "framer-motion";
import styles from "./styles.module.css";
import { sectionItemVariant } from "../../layout/variants";
import { SkillCard } from "./SkillCard";
import { About, Skill, SkillsDictionary } from "interfaces";

export const SkillsList = ({ data }: { data: About }) => {
  return (
    <div className={styles.skillsContainer}>
      <h3>My skills</h3>
      <div className={styles.skillsTable}>
        {Object.keys(data.skills).map((skillType) => (
          <m.div
            key={skillType}
            className={styles.skillsSection}
            variants={sectionItemVariant}
          >
            <h3>{skillType}</h3>
            <ul>
              {(data.skills as SkillsDictionary)[skillType].map(
                (skill: Skill, index: number) => {
                  return <SkillCard skill={skill} key={index} />;
                }
              )}
            </ul>
          </m.div>
        ))}
      </div>
    </div>
  );
};
