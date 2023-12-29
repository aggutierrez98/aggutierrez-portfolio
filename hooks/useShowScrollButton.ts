import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useShowScrollButton = () => {
  const { route } = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [inHomePage, setInHomePage] = useState(true);

  useEffect(() => {
    if (route === "/") setInHomePage(true);
    else setInHomePage(false);
  }, [route]);

  useEffect(() => {
    if (inHomePage) {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShowButton(false);
          else
            setTimeout(() => {
              setShowButton(true);
            }, 600);
        });
      };

      const topSection = document.getElementById("top-section")!;
      const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });
      observer.observe(topSection);
    }
  }, [inHomePage]);

  return showButton;
};
