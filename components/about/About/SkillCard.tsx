import styles from "./styles.module.css";
import { Skill } from "interfaces";
import { useEffect } from "react";
import dynamic from "next/dynamic";

interface Props {
  skill: Skill;
}

export const SkillCard = ({ skill }: Props) => {
  const Icon = dynamic(
    async () =>
      await import(
        `${process.env.NEXT_PUBLIC_ASSETS_URL}/techs/${skill?.assetName}`
      )
  );

  useEffect(() => {
    const el = document.getElementById(`skill-${skill.name}`)?.style;
    el?.setProperty("--box-color", skill.color);
  }, [skill.color, skill.name]);

  return (
    <li>
      <a
        id={`skill-${skill.name}`}
        className={styles.skillCard}
        target="_blank"
        rel="noopener noreferrer"
        href={skill?.url}
      >
        <Icon />
        <p data-text={skill.name}>{skill.name}</p>
      </a>
    </li>
  );
};
