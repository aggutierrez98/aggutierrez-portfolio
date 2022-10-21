import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/router";

const sections = [
  "home",
  "about",
  "experience",
  "projects",
  "contact",
] as const;

type SectionId = typeof sections[number];

const isSectionId = (value: string): value is SectionId => {
  const sectionIds = sections;
  return sectionIds.includes(value as SectionId);
};

const useActiveSectionId = (href: string): [SectionId, boolean] => {
  const { asPath, route } = useRouter();
  const [, startTransition] = useTransition();
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]);

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
    const body = document.getElementById("main-layout")!;

    const handleScroll = () => {
      const sectionIds = [];
      for (let index = sections.length - 1; index >= 0; index--) {
        const sectionId = sections[index];
        sectionIds.push(sectionId);
      }

      const scrollBottom =
        body?.offsetTop! + body!.scrollTop >= document.body.offsetHeight;

      if (!scrollBottom) {
        startTransition(() => setActiveSectionId(sections[0]));
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          const sectionActive =
            section &&
            section.offsetTop <
              body!.scrollTop + document.documentElement.clientHeight / 8;

          if (sectionActive) {
            startTransition(() => setActiveSectionId(sectionId));
            break;
          }
        }
      }
    };

    body?.addEventListener("scroll", handleScroll);
    return () => body?.removeEventListener("scroll", handleScroll);
  }, []);

  return [activeSectionId as SectionId, active];
};

export default useActiveSectionId;
