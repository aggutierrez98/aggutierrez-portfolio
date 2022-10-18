import styles from "./styles.module.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { Logo } from "components";
import { SocialMediaLinks } from "../MainLayout/SocialMediaLinks";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { sectionVariant, sectionItemVariant } from "../variants";
import { MediaData } from "../../../interfaces/index";

interface Props {
  socialMediaData?: MediaData;
}

export const Footer = ({ socialMediaData }: Props) => {
  return (
    <footer className={styles.container}>
      <LazyMotion features={domAnimation}>
        <m.div
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className={styles.footerContainer}
          variants={sectionVariant}
        >
          <Logo tabIndex={0} className={styles.logo} />
          <div className={styles.textContainer}>
            <div className={styles.socialMediaContainer}>
              <p>You can follow me on</p>
              <SocialMediaLinks socialMediaData={socialMediaData} />
            </div>
            <div className={styles.legendContainer}>
              <m.p className={styles.legendText} variants={sectionItemVariant}>
                Made with{" "}
                <IoIosHeartEmpty tabIndex={0} className={styles.legendIcon} />{" "}
                by Agustin Gutierrez
              </m.p>
              <m.p
                className={styles.legendTextyles}
                variants={sectionItemVariant}
              >
                Copyright © 2022 Agustin Gutierrez
              </m.p>
            </div>
          </div>
        </m.div>
      </LazyMotion>
    </footer>
  );
};
