import Image from "next/image";
import React from "react";
import { getSkillInfo } from "helpers";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

interface Props {
  techs: string[];
  variants?: any;
  detailsPage?: boolean;
}

export const TechsList = ({ techs, variants, detailsPage = false }: Props) => {
  return (
    <motion.ul
      className={`${styles.techsContainer} ${
        detailsPage ? `${styles.extended}` : ""
      }`}
      variants={variants?.container}
    >
      {techs?.map((name) => {
        const skillData = getSkillInfo(name);

        const Icon = dynamic(
          async () =>
            await import(`public/assets/svg/mini-icons/${skillData?.assetName}`)
        );

        return (
          <li title={`${name}-icon`} key={name}>
            <motion.a
              whileHover={
                detailsPage
                  ? {}
                  : {
                      borderColor: skillData?.color,
                      boxShadow: `0 0 5px ${skillData?.color}`,
                    }
              }
              transition={{ duration: 0.15 }}
              variants={variants?.item}
              style={
                detailsPage
                  ? { borderColor: skillData?.color, color: skillData?.color }
                  : { color: skillData?.color }
              }
              target="_blank"
              rel="noopener noreferrer"
              href={skillData?.url}
              data-text={skillData?.name}
              className={`${
                detailsPage ? `${styles.techTagExtended}` : `${styles.techTag}`
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
