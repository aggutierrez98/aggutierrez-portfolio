import Image from "next/image";
import React from "react";
import { getSkillInfo } from "helpers";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { techsVariants } from "./variants";

interface Props {
  techs: string[];
  detailsPage?: boolean;
}

export const TechsList = ({ techs, detailsPage = false }: Props) => {
  return (
    <motion.ul
      className={`${styles.techsContainer} ${
        detailsPage ? `${styles.extended}` : ""
      }`}
      variants={techsVariants?.container}
      initial="hidden"
      animate="visible"
    >
      {techs?.map((name) => {
        const skillData = getSkillInfo(name);

        const Icon = dynamic(
          async () =>
            await import(`public/assets/techs/${skillData?.assetName}`)
        );

        return (
          <li title={`${name}-icon`} key={name}>
            <motion.a
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={techsVariants.item}
              custom={{ color: skillData?.color, isDetailsPage: detailsPage }}
              target="_blank"
              rel="noopener noreferrer"
              href={skillData?.url}
              data-text={skillData?.name}
              className={`${styles.techTag} ${
                detailsPage ? `${styles.extendedTag}` : ""
              }`}
            >
              <Icon />
            </motion.a>
          </li>
        );
      })}
    </motion.ul>
  );
};
