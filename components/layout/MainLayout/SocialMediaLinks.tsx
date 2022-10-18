import styles from "./socialMediaLinks.module.css";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useCopyToClipboard } from "hooks";
import { socialMediaVariants } from "./variants";
import { MediaData } from "interfaces";
import dynamic from "next/dynamic";
interface Props {
  socialMediaData?: MediaData;
}

export const SocialMediaLinks = ({ socialMediaData }: Props) => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <div id="social-media-side" className={styles.container}>
      {socialMediaData && (
        <LazyMotion features={domAnimation}>
          <m.ul
            initial="hidden"
            animate="visible"
            variants={socialMediaVariants.container}
          >
            {Object.values(socialMediaData).map(
              (mediaData: MediaData, index) => {
                const Icon = dynamic(
                  async () =>
                    await import(
                      `public/assets/social-media/${mediaData.icon}.svg`
                    )
                );

                return (
                  <li key={index}>
                    {mediaData.link ? (
                      <m.a
                        variants={socialMediaVariants.item}
                        className={styles.logo}
                        aria-label={mediaData.title}
                        href={mediaData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        // data-title={mediaData.title}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Icon />
                      </m.a>
                    ) : (
                      <m.button
                        variants={socialMediaVariants.item}
                        className={styles.logo}
                        aria-label={mediaData.title}
                        onClick={() => {
                          if (mediaData.action === "copyuser") {
                            copyToClipboard("aggutierrez#1860");
                          } else if (mediaData.action === "sendemail") {
                            window.open(
                              "mailto:agustinguti123@gmail.com?subject=Subject&body=Hi!%20I%20want%20to%20get%20in%20touch!"
                            );
                          }
                        }}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Icon />
                      </m.button>
                    )}
                  </li>
                );
              }
            )}
          </m.ul>
        </LazyMotion>
      )}
    </div>
  );
};
