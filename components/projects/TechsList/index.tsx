import styles from "./styles.module.css";
import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { techsVariants } from "./variants";
import { Skill } from "interfaces/index";

interface Props {
  techs: Skill[];
  detailsPage?: boolean;
}

export const TechsList = ({ techs, detailsPage = false }: Props) => {
  return (
    <ul
      className={`${styles.techsContainer} ${
        detailsPage ? `${styles.extended}` : ""
      }`}
    >
      {techs?.map((tech: Skill) => {
        const Icon = dynamic(
          async () =>
            await import(
              `${process.env.NEXT_PUBLIC_ASSETS_URL}/techs/${tech?.assetName}`
            )
        );
        return (
          <li title={`${tech.name}-icon`} key={tech.name}>
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
      })}
    </ul>
  );
};
