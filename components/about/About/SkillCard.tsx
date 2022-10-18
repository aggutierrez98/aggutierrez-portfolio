import { motion, m } from "framer-motion";
import { tagMotion, pMotion } from "./variants";
import styles from "./styles.module.css";
import { Skill } from "interfaces";
import dynamic from "next/dynamic";

interface Props {
  skill: Skill;
}

export const SkillCard = ({ skill }: Props) => {
  const Icon = dynamic(
    async () => await import(`public/assets/techs/${skill?.assetName}`)
  );

  return (
    <li>
      <m.a
        whileHover="hover"
        whileFocus="focus"
        animate="rest"
        initial="rest"
        exit="hidden"
        custom={skill?.color}
        variants={tagMotion}
        className={styles.skillCard}
        target="_blank"
        rel="noopener noreferrer"
        href={skill?.url}
      >
        <Icon />
        <motion.p custom={skill?.color} variants={pMotion}>
          {skill.name}
        </motion.p>
      </m.a>
    </li>
  );
};
