import Image from "next/image";
import Link from "next/link";
import styles from "../styles/layouts/Footer.module.css";
import { HeartIcon } from "@heroicons/react/outline";
import socialMediaData from "../data/socialMediaData.json";
import { motion } from "framer-motion";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import AggutierrezLogo from "../public/assets/aggutierrez.svg";
import { Logo } from "../components/Logo";

export const Footer = () => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <footer className={styles.container}>
      <Logo color={"#1e2022"} className={styles.logo} />
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
                <Image
                  src={"/assets/svg/social-media/linkedin.svg"}
                  height={35}
                  width={35}
                  alt="linkedin-image"
                />
                {/* <LinkedinSvg /> */}
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
