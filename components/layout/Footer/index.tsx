import Link from "next/link";
import styles from "./styles.module.css";
import { HeartIcon } from "@heroicons/react/outline";
import socialMediaData from "data/socialMediaData.json";
import { motion } from "framer-motion";
import { useCopyToClipboard } from "hooks";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
// import { Logo } from "components";

export const Footer = () => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <footer className={styles.container}>
      {/* <Logo color={"#00adb5"} className={styles.logo} /> */}
      <h2 className={styles.logo}>Aggutierrez.com</h2>
      <div className={styles.textContainer}>
        <div className={styles.socialMediaContainer}>
          <p>You can follow me on</p>
          <div className={styles.socialMediaLinks}>
            <Link href={socialMediaData.github_profile} passHref>
              <motion.a
                data-title="Go to github profile"
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
            </Link>
            <Link href={socialMediaData.linkedin_profile} passHref>
              <motion.a
                data-title="Go to linkedin profile"
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
            </Link>
            <motion.button
              data-title="Copy discord user"
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 0.15,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              initial={{ scale: 1 }}
              className={styles.socialMediaButton}
              onClick={() => copyToClipboard(socialMediaData.discord_user)}
            >
              <TbBrandDiscord />
            </motion.button>
            <motion.button
              data-title="Send an email"
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 0.15,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              initial={{ scale: 1 }}
              className={styles.socialMediaButton}
              onClick={() =>
                window.open(
                  "mailto:agustinguti123@gmail.com?subject=Subject&body=Hi!%20I%20want%20to%20get%20in%20touch!"
                )
              }
            >
              <SiGmail />
            </motion.button>
          </div>
        </div>
        <div className={styles.legendContainer}>
          <p className={styles.legendText}>
            Made with <HeartIcon className={styles.legendIcon} /> by Agustin
            Gutierrez
          </p>
        </div>
      </div>
    </footer>
  );
};
