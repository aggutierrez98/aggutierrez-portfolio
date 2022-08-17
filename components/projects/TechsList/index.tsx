import Image from "next/image";
import React from "react";
import { getTechInfo } from "helpers";
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
    <motion.ul className={styles.techsContainer} variants={variants?.container}>
      {techs?.map((name) => {
        const { color, url } = getTechInfo(name);

        const Icon = dynamic(
          async () => await import(`public/assets/svg/mini-icons/${name}.svg`)
        );

        return (
          <li title={`${name}-icon`} key={name}>
            <motion.a
              whileHover={detailsPage ? {} : { borderColor: color }}
              transition={{ duration: 0.15 }}
              variants={variants?.item}
              style={detailsPage ? { borderColor: color, color } : { color }}
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              data-text={name}
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
