import React from "react";
import styles from "./socialMediaLinks.module.css";
import socialMediaData from "data/socialMediaData.json";
import { motion, AnimatePresence } from "framer-motion";
import { useCopyToClipboard } from "hooks";
import { socialMediaVariants } from "./variants";
import { MediaData } from "interfaces";
import dynamic from "next/dynamic";

export const SocialMediaLinks = () => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <div id="social-media-side" className={styles.container}>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={socialMediaVariants.container}
      >
        <AnimatePresence>
          {/* @ts-ignore */}
          {Object.values(socialMediaData).map((mediaData: MediaData, index) => {
            const Icon = dynamic(
              async () =>
                await import(`public/assets/social-media/${mediaData.icon}.svg`)
            );

            return (
              <li key={index}>
                <motion.a
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
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
              </li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};
