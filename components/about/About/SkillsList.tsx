import React from "react";
import { motion, m } from "framer-motion";
import { pMotion, tagMotion } from "./variants";
import { getSkillInfo } from "helpers";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import { sectionItemVariant } from "../../layout/variants";

export const SkillsList = ({ data }: { data: any }) => {
  return (
    <div className={styles.skillsContainer}>
      <h3>My skills</h3>
      <div className={styles.skillsTable}>
        <m.div className={styles.skillsSection} variants={sectionItemVariant}>
          <h3>Frontend</h3>
          <ul>
            {data.skills.frontend?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(`public/assets/techs/${skillData?.assetName}`)
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
                    whileFocus="focus"
                    animate="rest"
                    initial="rest"
                    exit="hidden"
                    custom={skillData?.color}
                    variants={tagMotion}
                    className={styles.skillCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={skillData?.url}
                  >
                    <Icon />
                    <motion.p custom={skillData?.color} variants={pMotion}>
                      {skill}
                    </motion.p>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </m.div>
        <m.div className={styles.skillsSection} variants={sectionItemVariant}>
          <h3>Backend</h3>
          <ul>
            {data.skills.backend?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(`public/assets/techs/${skillData?.assetName}`)
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
                    whileFocus="focus"
                    animate="rest"
                    initial="rest"
                    exit="hidden"
                    custom={skillData?.color}
                    variants={tagMotion}
                    className={styles.skillCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={skillData?.url}
                  >
                    <Icon />
                    <motion.p custom={skillData?.color} variants={pMotion}>
                      {skill}
                    </motion.p>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </m.div>
        <m.div className={styles.skillsSection} variants={sectionItemVariant}>
          <h3>Database</h3>
          <ul>
            {data.skills.database?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(`public/assets/techs/${skillData?.assetName}`)
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
                    whileFocus="focus"
                    animate="rest"
                    initial="rest"
                    exit="hidden"
                    custom={skillData?.color}
                    variants={tagMotion}
                    className={styles.skillCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={skillData?.url}
                  >
                    <Icon />
                    <motion.p custom={skillData?.color} variants={pMotion}>
                      {skill}
                    </motion.p>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </m.div>
        <m.div className={styles.skillsSection} variants={sectionItemVariant}>
          <h3>Others</h3>
          <ul>
            {data.skills.others?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(`public/assets/techs/${skillData?.assetName}`)
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
                    whileFocus="focus"
                    animate="rest"
                    initial="rest"
                    exit="hidden"
                    custom={skillData?.color}
                    variants={tagMotion}
                    className={styles.skillCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={skillData?.url}
                  >
                    <Icon />
                    <motion.p custom={skillData?.color} variants={pMotion}>
                      {skill}
                    </motion.p>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </m.div>
      </div>
    </div>
  );
};
