import React, { useEffect, useState } from "react";
import styles from "./socialMediaLinks.module.css";
import { motion } from "framer-motion";
import { useCopyToClipboard } from "hooks";
import { socialMediaVariants } from "./variants";
import { MediaData } from "interfaces";
import dynamic from "next/dynamic";
import socialMediaData from "data/socialMediaData.json";

interface Props {
  data: MediaData[];
}

export const SocialMediaLinks = ({ data }: Props) => {
  const { copyToClipboard } = useCopyToClipboard();
  const [dataS, setDataS] = useState<MediaData[]>();

  useEffect(() => {
    //@ts-ignore
    setDataS(Object.values(socialMediaData));
  }, []);

  return (
    <div id="social-media-side" className={styles.container}>
      {dataS && (
        <motion.ul
          initial="hidden"
          animate="visible"
          // whileHover="hover"
          variants={socialMediaVariants.container}
        >
          {/* @ts-ignore */}
          {dataS.map((mediaData: MediaData, index) => {
            const Icon = dynamic(
              async () =>
                await import(`public/assets/social-media/${mediaData.icon}.svg`)
            );

            return (
              <motion.a
                key={index}
                // initial="hidden"
                // animate="visible"
                // whileHover="hover"
                variants={socialMediaVariants.item}
                className={styles.logo}
                href={mediaData.link}
                target="_blank"
                rel="noopener noreferrer"
                data-title={mediaData.title}
                onClick={() => {
                  if (mediaData.action === "copyuser") {
                    copyToClipboard("aggutierrez#1860");
                  }
                  if (mediaData.action === "sendemail") {
                    window.open(
                      "mailto:agustinguti123@gmail.com?subject=Subject&body=Hi!%20I%20want%20to%20get%20in%20touch!"
                    );
                  }
                }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};
