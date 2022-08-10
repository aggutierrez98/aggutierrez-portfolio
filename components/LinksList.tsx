import React from "react";
import styles from "../styles/components/LinkList.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";

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
            <Link href={github_repo_front_url} passHref>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.25 }}
                initial={{ scale: 1, opacity: 1 }}
              >
                <Image
                  src={"/assets/svg/social-media/github-icon.svg"}
                  width={30}
                  height={30}
                  alt="github-image"
                />
                <p>Github frontend repo</p>
              </motion.a>
            </Link>
          </li>
        )}
        {github_repo_back_url && (
          <li>
            <Link href={github_repo_back_url} passHref>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.12 }}
                initial={{ scale: 1, opacity: 1 }}
              >
                <Image
                  src={"/assets/svg/social-media/github-icon.svg"}
                  width={30}
                  height={30}
                  alt="github-image"
                />
                <p>Github backend repo</p>
              </motion.a>
            </Link>
          </li>
        )}
        {demo_url && (
          <li>
            <Link href={demo_url} passHref>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.12 }}
                initial={{ scale: 1, opacity: 1 }}
              >
                <ExternalLinkIcon />
                <p>Client deploy</p>
              </motion.a>
            </Link>
          </li>
        )}
        {server_url && (
          <li>
            <Link href={server_url} passHref>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.12 }}
                initial={{ scale: 1, opacity: 1 }}
              >
                <ExternalLinkIcon />
                <p>Server deploy</p>
              </motion.a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
