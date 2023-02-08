import { useEffect } from "react";
import { Skill } from "interfaces";
import { IconComponent } from "./IconComponent";
import styles from "./styles.module.css";

interface Props {
  skill: Skill;
}

export const SkillCard = ({ skill }: Props) => {
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
        <IconComponent name={skill.assetName} />
        <p data-text={skill.name}>{skill.name}</p>
      </a>
    </li>
  );
};
