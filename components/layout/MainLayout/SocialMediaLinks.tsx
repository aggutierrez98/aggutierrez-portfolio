import React, { useEffect, useState } from "react";
import styles from "./socialMediaLinks.module.css";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useCopyToClipboard } from "hooks";
import { socialMediaVariants } from "./variants";
import { MediaData } from "interfaces";
import dynamic from "next/dynamic";
import socialMediaData from "data/socialMediaData.json";

export const SocialMediaLinks = () => {
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
                    <m.a
                      variants={socialMediaVariants.item}
                      className={styles.logo}
                      href={mediaData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-title={mediaData.title}
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
                      <Icon />
                    </m.a>
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
