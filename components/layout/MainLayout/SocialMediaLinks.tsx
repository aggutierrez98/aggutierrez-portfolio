import React from "react";
import styles from "./socialMediaLinks.module.css";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import socialMediaData from "data/socialMediaData.json";
import { motion } from "framer-motion";
import { useCopyToClipboard } from "hooks";

export const SocialMediaLinks = () => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <div id="social-media-side" className={styles.container}>
      <ul>
        <li>
          <motion.a
            className={styles.logo}
            href={socialMediaData.github_profile}
            // data-title="Go to github profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.15,
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            initial={{ scale: 1 }}
          >
            <FiGithub />
          </motion.a>
        </li>
        <li>
          <motion.a
            href={socialMediaData.linkedin_profile}
            className={styles.logo}
            // data-title="Go to github profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.15,
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            initial={{ scale: 1 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </li>
        <li>
          <motion.a
            onClick={() => copyToClipboard(socialMediaData.discord_user)}
            className={styles.logo}
            // data-title="Go to github profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.15,
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            initial={{ scale: 1 }}
          >
            <TbBrandDiscord />
          </motion.a>
        </li>
        <li>
          <motion.a
            onClick={() =>
              window.open(
                "mailto:agustinguti123@gmail.com?subject=Subject&body=Hi!%20I%20want%20to%20get%20in%20touch!"
              )
            }
            className={styles.logo}
            // data-title="Go to github profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.15,
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            initial={{ scale: 1 }}
          >
            <SiGmail />
          </motion.a>
        </li>
      </ul>
    </div>
  );
};
