import styles from "./styles.module.css";
import { Skill } from "interfaces/index";
import { TechTag } from "./TechTag";

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
      {techs?.map((tech: Skill) => (
        <TechTag tech={tech} detailsPage={detailsPage} key={tech.name} />
      ))}
    </ul>
  );
};
