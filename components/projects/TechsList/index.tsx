import Image from "next/image";
import React from "react";
import { getSkillInfo } from "helpers";
import styles from "./styles.module.css";
import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { techsVariants } from "./variants";

interface Props {
  techs: string[];
  detailsPage?: boolean;
}

export const TechsList = ({ techs, detailsPage = false }: Props) => {
  return (
    <ul
      className={`${styles.techsContainer} ${
        detailsPage ? `${styles.extended}` : ""
      }`}
    >
      {techs?.map((name) => {
        const skillData = getSkillInfo(name);
        const Icon = dynamic(
          async () =>
            await import(`public/assets/techs/${skillData?.assetName}`)
        );
        return (
          <li title={`${name}-icon`} key={name}>
            <m.a
              tabIndex={2}
              viewport={{ once: true }}
              whileHover={
                detailsPage
                  ? {
                      boxShadow: `0 0 10px ${skillData.color}`,
                      transition: { duration: 0.15 },
                    }
                  : {
                      borderColor: skillData.color,
                      boxShadow: `0 0 5px ${skillData.color}`,
                      transition: { duration: 0.25 },
                    }
              }
              whileFocus={
                detailsPage
                  ? {
                      boxShadow: `0 0 10px ${skillData.color}`,
                      transition: { duration: 0.15 },
                    }
                  : {
                      borderColor: skillData.color,
                      boxShadow: `0 0 5px ${skillData.color}`,
                      transition: { duration: 0.25 },
                    }
              }
              variants={techsVariants.item}
              custom={{
                color: skillData?.color,
                isDetailsPage: detailsPage,
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={skillData?.url}
              data-text={skillData?.name}
              className={`${styles.techTag} ${
                detailsPage ? `${styles.extendedTag}` : ""
              }`}
            >
              <Icon />
            </m.a>
          </li>
        );
      })}
    </ul>
  );
};
