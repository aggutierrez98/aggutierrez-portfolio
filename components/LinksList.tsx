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
          <motion.li
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.12 }}
            initial={{ scale: 1 }}
          >
            <Link href={github_repo_front_url} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={"/assets/svg/social-media/github-icon.svg"}
                  width={30}
                  height={30}
                  alt="github-image"
                />
                <p>Github frontend repo</p>
              </a>
            </Link>
          </motion.li>
        )}
        {github_repo_back_url && (
          <motion.li
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.12 }}
            initial={{ scale: 1 }}
          >
            <Link href={github_repo_back_url} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={"/assets/svg/social-media/github-icon.svg"}
                  width={30}
                  height={30}
                  alt="github-image"
                />
                <p>Github backend repo</p>
              </a>
            </Link>
          </motion.li>
        )}
        {demo_url && (
          <motion.li
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.12 }}
            initial={{ scale: 1 }}
          >
            <Link href={demo_url} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon />
                <p>Client deploy</p>
              </a>
            </Link>
          </motion.li>
        )}
        {server_url && (
          <motion.li
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.12 }}
            initial={{ scale: 1 }}
          >
            <Link href={server_url} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon />
                <p>Server deploy</p>
              </a>
            </Link>
          </motion.li>
        )}
      </ul>
    </div>
  );
};
