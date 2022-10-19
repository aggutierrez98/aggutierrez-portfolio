import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/router";

const sections = [
  "contact",
  "projects",
  "experience",
  "about",
  "home",
] as const;

type SectionId = typeof sections[number];

const isSectionId = (value: string): value is SectionId => {
  const sectionIds = sections;
  return sectionIds.includes(value as SectionId);
};

const useActiveSectionId = (href: string): [SectionId, boolean] => {
  const { asPath, route } = useRouter();
  const [, startTransition] = useTransition();
  const [activeSectionId, setActiveSectionId] = useState("home");
  let active = activeSectionId === href.split("#")[1];

  if (asPath.includes("/projects/")) {
    if (href.split("#")[1] === "projects") {
      active = true;
    } else active = false;
  } else if (route === "/404") {
    active = false;
  }

  useEffect(() => {
    const initId = window.location.hash?.slice(1);
    if (isSectionId(initId)) setActiveSectionId(initId);
    const sectionIds = (sections as unknown as string[]).reverse();

    const handleScroll = () => {
      const scrollTop = document.getElementById("main-layout")!.scrollTop;
      const offsetTops = sectionIds.map((sectionId) => {
        return document.getElementById(sectionId)!.offsetTop;
      });

      for (let index = 0; index < sectionIds.length; index++) {
        const sectionHeight = offsetTops[index];
        const scrollY = scrollTop + document.documentElement.clientHeight / 8;
        const sectionActive = sectionHeight < scrollY;

        if (sectionActive) {
          console.log(
            `${sectionHeight} < ${scrollY}   = ${scrollTop} + ${
              document.documentElement.clientHeight / 8
            }    ----> ${sectionActive}`
          );

          startTransition(() => setActiveSectionId(sectionIds[index]));
          break;
        }
      }
    };

    document.querySelector("main")?.addEventListener("scroll", handleScroll);
    return () =>
      document
        .querySelector("main")
        ?.removeEventListener("scroll", handleScroll);
  }, []);

  return [activeSectionId as SectionId, active];
};

export default useActiveSectionId;
