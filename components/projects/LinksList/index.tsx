import React from "react";
import styles from "./styles.module.css";
import { LinkButton } from "./LinkButton";

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
    <div className={styles.linksContainer}>
      <h3>Links</h3>
      <ul>
        {github_repo_front_url && (
          <li>
            <LinkButton
              text={"Github frontend repo"}
              link={github_repo_front_url}
            />
          </li>
        )}
        {github_repo_back_url && (
          <li>
            <LinkButton
              text={"Github backend repo"}
              link={github_repo_back_url}
            />
          </li>
        )}
        {demo_url && (
          <li>
            <LinkButton text={"Client deploy"} link={demo_url} deploy={true} />
          </li>
        )}
        {server_url && (
          <li>
            <LinkButton
              text={"Server deploy"}
              link={server_url}
              deploy={true}
            />
          </li>
        )}
      </ul>
    </div>
  );
};
