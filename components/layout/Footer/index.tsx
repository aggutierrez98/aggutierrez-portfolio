import styles from "./styles.module.css";
import { HeartIcon } from "@heroicons/react/outline";
import { useCopyToClipboard } from "hooks";
import Logo from "public/assets/logo-agg.svg";
import { SocialMediaLinks } from "../MainLayout/SocialMediaLinks";
import { MediaData } from "../../../interfaces/index";

interface Props {
  socialMediaData: MediaData[];
}

export const Footer = ({ socialMediaData }: Props) => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <footer className={styles.container}>
      <div className={styles.footerContainer}>
        <Logo className={styles.logo} />
        <div className={styles.textContainer}>
          <div className={styles.socialMediaContainer}>
            <p>You can follow me on</p>
            <SocialMediaLinks data={socialMediaData} />
          </div>
          <div className={styles.legendContainer}>
            <p className={styles.legendText}>
              Made with <HeartIcon className={styles.legendIcon} /> by Agustin
              Gutierrez
            </p>
            <p className={styles.legendTextyles}>
              Copyright © 2022 Agustin Gutierrez
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
