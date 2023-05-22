import styles from "./styles.module.css";
import { FavoriteBorderSVGIcon } from "@react-md/material-icons";
import { SocialMediaLinks } from "../MainLayout/SocialMediaLinks";
import { m } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "../variants";
import { MediaData } from "../../../interfaces/index";

interface Props {
  socialMediaData?: MediaData;
}

export const Footer = ({ socialMediaData }: Props) => {
  return (
    <footer className={styles.container}>
      <m.div
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className={styles.footerContainer}
        variants={sectionVariant}
      >
        <div className={styles.textContainer}>
          <div className={styles.socialMediaContainer}>
            <p>You can follow me on</p>
            <SocialMediaLinks socialMediaData={socialMediaData} />
          </div>
          <div className={styles.legendContainer}>
            <m.p className={styles.legendText} variants={sectionItemVariant}>
              Made with{" "}
              <FavoriteBorderSVGIcon
                tabIndex={0}
                className={styles.legendIcon}
              />{" "}
              by Agustin Gutierrez
            </m.p>
            <m.p className={styles.legendText} variants={sectionItemVariant}>
              Copyright © 2022 Agustin Gutierrez
            </m.p>
          </div>
        </div>
      </m.div>
    </footer>
  );
};
