import { m } from "framer-motion";
import styles from "./styles.module.css";
import { sectionItemVariant } from "../../layout/variants";
import { SkillCard } from "./SkillCard";
import { About, Skill, SkillsDictionary } from "interfaces";

export const SkillsList = ({ data }: { data: About }) => {
  return (
    <div className={styles.skillsContainer}>
      <m.h3 variants={sectionItemVariant}>My skills</m.h3>
      <m.div className={styles.skillsTable} variants={sectionItemVariant}>
        {Object.keys(data.skills).map((skillType) => (
          <div key={skillType} className={styles.skillsSection}>
            <h3>{skillType}</h3>
            <ul>
              {(data.skills as SkillsDictionary)[skillType].map(
                (skill: Skill, index: number) => {
                  return <SkillCard skill={skill} key={index} />;
                }
              )}
            </ul>
          </div>
        ))}
      </m.div>
    </div>
  );
};
