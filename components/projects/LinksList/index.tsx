import styles from "./styles.module.css";
import { LinkButton } from "./LinkButton";
import { m } from "framer-motion";
import { sectionItemVariant, sectionVariant } from "../../layout/variants";

interface Props {
  github_repo_front_url: string;
  github_repo_back_url?: string;
  demo_url: string;
  server_url?: string;
}

export const LinksList = ({
  github_repo_front_url,
  github_repo_back_url,
  demo_url,
  server_url,
}: Props) => {
  return (
    <m.div
      className={styles.linksContainer}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
    >
      <m.h3 variants={sectionItemVariant} tabIndex={0}>
        Links
      </m.h3>
      <ul>
        {github_repo_front_url && (
          <m.li variants={sectionItemVariant}>
            <LinkButton
              text={"Client repository"}
              link={github_repo_front_url}
            />
          </m.li>
        )}
        {github_repo_back_url && (
          <m.li variants={sectionItemVariant}>
            <LinkButton
              text={"Server repository"}
              link={github_repo_back_url}
            />
          </m.li>
        )}
        {demo_url && (
          <m.li variants={sectionItemVariant}>
            <LinkButton text={"Client deploy"} link={demo_url} />
          </m.li>
        )}
        {server_url && (
          <m.li variants={sectionItemVariant}>
            <LinkButton text={"Server deploy"} link={server_url} />
          </m.li>
        )}
      </ul>
    </m.div>
  );
};
