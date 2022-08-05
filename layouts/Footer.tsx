import Image from "next/image";
import Link from "next/link";
import styles from "../styles/layouts/Footer.module.css";
import { HeartIcon } from "@heroicons/react/outline";
import socialMediaData from "../data/socialMediaData.json";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Aggutierrez</h2>
      <div className={styles.textContainer}>
        <div className={styles.socialMediaContainer}>
          <p>You can follow me on</p>
          <div className={styles.socialMediaLinks}>
            <Link href={socialMediaData.github_profile} passHref>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.15 }}
                initial={{ scale: 1 }}
              >
                <Image
                  src={"/assets/svg/social-media/github.svg"}
                  height={35}
                  width={35}
                  alt="github-image"
                />
              </motion.a>
            </Link>
            <Link href={socialMediaData.linkedin_profile} passHref>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.15 }}
                initial={{ scale: 1 }}
              >
                <Image
                  src={"/assets/svg/social-media/linkedin.svg"}
                  height={35}
                  width={35}
                  alt="linkedin-image"
                />
              </motion.a>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.15 }}
              initial={{ scale: 1 }}
              className={styles.socialMediaButton}
              onClick={() => {
                console.log(
                  `Must copy: ${socialMediaData.discord_user} in clipboard`
                );
              }}
            >
              <Image
                src={"/assets/svg/social-media/discord.svg"}
                height={35}
                width={35}
                alt="linkedin-image"
              />
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
