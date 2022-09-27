import { useEffect, useState, useTransition } from "react";

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

const useActiveSectionId = (): SectionId => {
  const [, startTransition] = useTransition();
  const [activeSectionId, setActiveSectionId] = useState("home");

  useEffect(() => {
    const initId = window.location.hash?.slice(1);
    if (isSectionId(initId)) setActiveSectionId(initId);
    const sectionIds = (sections as unknown as string[]).reverse();

    const handleScroll = () => {
      const body = document.getElementById("main-layout");

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
    };

    document.querySelector("main")?.addEventListener("scroll", handleScroll);
    return () =>
      document
        .querySelector("main")
        ?.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId as SectionId;
};

export default useActiveSectionId;
