import { useEffect } from "react";
import { m } from "framer-motion";
import { Skill } from "../../../interfaces/index";
import { techsVariants } from "./variants";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";

interface Props {
  tech: Skill;
  detailsPage: boolean;
}

export const TechTag = ({ tech, detailsPage }: Props) => {
  const Icon = dynamic(
    async () =>
      await import(
        `${process.env.NEXT_PUBLIC_ASSETS_URL}/techs/${tech?.assetName}.svg`
      )
  );

  useEffect(() => {
    const el = document.getElementById(`tag-${tech.name}`)?.style;
    el?.setProperty("--box-color", tech.color);
  }, [tech.color, tech.name]);

  return (
    <li title={`${tech.name}-icon`} key={tech.name} id={`tag-${tech.name}`}>
      <m.a
        viewport={{ once: true }}
        whileHover={
          detailsPage
            ? {
                boxShadow: `0 0 15px ${tech.color}`,
                transition: { duration: 0.15 },
              }
            : {
                borderColor: tech.color,
                boxShadow: `0 0 15px ${tech.color}`,
                transition: { duration: 0.25 },
              }
        }
        whileFocus={
          detailsPage
            ? {
                boxShadow: `0 0 15px ${tech.color}`,
                transition: { duration: 0.15 },
              }
            : {
                borderColor: tech.color,
                boxShadow: `0 0 15px ${tech.color}`,
                transition: { duration: 0.25 },
              }
        }
        variants={techsVariants.item}
        custom={{
          color: tech?.color,
          isDetailsPage: detailsPage,
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={tech?.url}
        data-text={tech?.name}
        aria-label={`Visit ${tech?.name} site`}
        className={`${styles.techTag} ${
          detailsPage ? `${styles.extendedTag}` : ""
        }`}
      >
        <Icon />
      </m.a>
    </li>
  );
};
