import React from "react";
import { motion } from "framer-motion";
import { pMotion, tagMotion } from "./variants";
import { getSkillInfo } from "helpers";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

export const SkillsList = ({ data }: { data: any }) => {
  return (
    <div className={styles.skillsContainer}>
      <h5>My skills</h5>
      <div className={styles.skillsTable}>
        <div className={styles.skillsSection}>
          <h3>Frontend</h3>
          <ul>
            {data.skills.frontend?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(
                    `public/assets/svg/mini-icons/${skillData?.assetName}`
                  )
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
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
        </div>
        <div className={styles.skillsSection}>
          <h3>Backend</h3>
          <ul>
            {data.skills.backend?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(
                    `public/assets/svg/mini-icons/${skillData?.assetName}`
                  )
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
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
        </div>
        <div className={styles.skillsSection}>
          <h3>Database</h3>
          <ul>
            {data.skills.database?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(
                    `public/assets/svg/mini-icons/${skillData?.assetName}`
                  )
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
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
        </div>
        <div className={styles.skillsSection}>
          <h3>Others</h3>
          <ul>
            {data.skills.others?.map((skill: string, index: number) => {
              const skillData = getSkillInfo(skill);
              const Icon = dynamic(
                async () =>
                  await import(
                    `public/assets/svg/mini-icons/${skillData?.assetName}`
                  )
              );
              return (
                <li key={index}>
                  <motion.a
                    whileHover="hover"
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
        </div>
      </div>
    </div>
  );
};
