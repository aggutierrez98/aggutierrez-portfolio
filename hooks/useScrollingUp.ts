import { useEffect, useState, useCallback } from "react";

export const useScrollingUp = () => {
  const [isScrollingUp, setIsScrolling] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mainElem =
    typeof window !== "undefined" ? document.querySelector("main") : null;

  const controlNavbar = useCallback(() => {
    if (mainElem) {
      if (mainElem?.scrollTop >= lastScrollY) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
      setLastScrollY(mainElem.scrollTop);
    }
  }, [lastScrollY, mainElem]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.querySelector("main")?.addEventListener("scroll", controlNavbar);
      return () => {
        document
          .querySelector("main")
          ?.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return isScrollingUp;
};

// export const useScrollingUp = () => {
//   const [position, setPosition] = useState(
//     typeof window !== "undefined" ? window.pageYOffset : null
//   );
//   const [visible, setVisible] = useState(true);
//   useEffect(() => {
//     const handleScroll = () => {
//       let moving = window.pageYOffset;

//       setVisible(position ? position > moving : false);
//       setPosition(moving);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });

//   return visible;
// };
