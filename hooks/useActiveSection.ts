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

  // if (asPath.includes("/projects/")) {
  //   if (href.split("#")[1] === "projects") {
  //     active = true;
  //   } else active = false;
  // } else if (route === "/404") {
  //   active = false;
  // }

  useEffect(() => {
    const initId = window.location.hash?.slice(1);

    if (isSectionId(initId)) setActiveSectionId(initId);

    //@ts-ignore
    const sectionIds = sections.reverse();
    const body = document.getElementById("main-layout")!;

    const handleScroll = () => {
      const scrollBottom =
        document.querySelector("main")?.offsetTop! +
          document.querySelector("main")!.scrollTop >=
        document.body.offsetHeight;

      // console.log(
      //   `${document.querySelector("main")?.offsetTop!} + ${
      //     document.querySelector("main")?.scrollTop
      //   } =   ${
      //     document.querySelector("main")?.offsetTop! +
      //     document.querySelector("main")!.scrollTop
      //   } >= ${document.body.offsetHeight}  -->  ${scrollBottom}`
      // );

      if (!scrollBottom) {
        startTransition(() => setActiveSectionId(sectionIds[0]));
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          const sectionActive =
            section &&
            section.offsetTop <
              document.documentElement.scrollTop +
                document.documentElement.clientHeight / 8;

          // console.log({ section });

          if (sectionActive) {
            startTransition(() => setActiveSectionId(sectionId));
            break;
          }
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

// import nav, { HOME } from "constants/nav";
// import { useEffect, useState, useTransition } from "react";

// import type { SectionId } from "types";

// const isSectionId = (value: string): value is SectionId => {
//   const sectionIds = Object.values(nav).map(({ id }) => id as string);
//   return sectionIds.includes(value);
// };

// const useActiveSectionId = (): SectionId => {
//   const [, startTransition] = useTransition();
//   const [activeSectionId, setActiveSectionId] = useState(HOME.id);

//   useEffect(() => {
//     const initId = window.location.hash?.slice(1);

//     if (isSectionId(initId)) setActiveSectionId(initId);

//     const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

//     const handleScroll = () => {
//       const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

//       if (scrollBottom) {
//         startTransition(() => setActiveSectionId(sectionIds[0]));
//       } else {
//         for (const sectionId of sectionIds) {
//           const section = document.getElementById(sectionId);
//           const sectionActive = section
//             && section.offsetTop < document.documentElement.scrollTop
//             + document.documentElement.clientHeight / 8;

//           if (sectionActive) {
//             startTransition(() => setActiveSectionId(sectionId));
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return activeSectionId;
// };
