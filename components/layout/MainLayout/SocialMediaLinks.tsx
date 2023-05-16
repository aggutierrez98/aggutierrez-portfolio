import styles from "./socialMediaLinks.module.css";
import { m } from "framer-motion";
import { useCopyToClipboard } from "hooks";
import { socialMediaVariants } from "./variants";
import { MediaData, MediaDataEntry } from "interfaces";
import dynamic from "next/dynamic";
interface Props {
  socialMediaData?: MediaData;
}

export const SocialMediaLinks = ({ socialMediaData }: Props) => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <div id="social-media-side" className={styles.container}>
      {socialMediaData && (
        <m.ul
          initial="hidden"
          animate="visible"
          variants={socialMediaVariants.container}
        >
          {Object.values(socialMediaData).map(
            (mediaData: MediaDataEntry, index) => {
              const Icon = dynamic(
                async () =>
                  await import(
                    `${process.env.NEXT_PUBLIC_ASSETS_URL}/social-media/${mediaData.icon}.svg`
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
                      onClick={() =>
                        mediaData.action === "copyuser" &&
                        copyToClipboard("aggutierrez#1860")
                      }
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
      )}
    </div>
  );
};
