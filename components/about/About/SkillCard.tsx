// import { m } from "framer-motion";
// import { tagMotion, pMotion } from "./variants";
import styles from "./styles.module.css";
import { Skill } from "interfaces";
// import dynamic from "next/dynamic";
import { IconComponent } from "@c/layout/Icon";
import { useEffect } from "react";

interface Props {
  skill: Skill;
}

export const SkillCard = ({ skill }: Props) => {
  // // const Icon = dynamic(
  // //   async () =>
  // //     await import(
  // //       `${process.env.NEXT_PUBLIC_ASSETS_URL}/techs/${skill?.assetName}`
  // //     )
  // // );

  useEffect(() => {
    const el = document.getElementById(`skill-${skill.name}`)?.style;
    el?.setProperty("--box-color", skill.color);
  }, [skill.color, skill.name]);

  return (
    <li>
      <a
        id={`skill-${skill.name}`}
        // // whileHover="hover"
        // // whileFocus="focus"
        // // // animate="rest"
        // // initial="rest"
        // // exit="hidden"
        // // custom={skill?.color}
        // // variants={tagMotion}
        className={styles.skillCard}
        target="_blank"
        rel="noopener noreferrer"
        href={skill?.url}
      >
        {/* <Icon /> */}
        <IconComponent name={skill.assetName} />
        <p data-text={skill.name}>{skill.name}</p>
      </a>
    </li>
  );
};
