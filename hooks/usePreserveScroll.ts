import { useRouter } from "next/router";
import { useEffect, useRef, useCallback } from "react";

export const usePreserveScroll = () => {
  const router = useRouter();
  const scrollPositions = useRef<{ [url: string]: number }>({});
  const isBack = useRef(false);

  const onRouteChangeStart = useCallback(() => {
    const url = router.pathname;
    const scollY = document.getElementById("main-layout")?.scrollTop;
    scrollPositions.current[url] = scollY || 0;
  }, [router.pathname]);

  const onRouteChangeComplete = (url: any) => {
    if (isBack.current) {
      setTimeout(() => {
        document.getElementById("main-layout")?.scroll({
          top: scrollPositions.current[url],
          behavior: "smooth",
        });
        //Wait time for page exit animation
      }, 400);
    } else {
      document.getElementById("main-layout")?.scroll({
        top: 0,
        behavior: "auto",
      });
    }
    isBack.current = false;
  };

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true;
      return true;
    });

    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router, onRouteChangeStart]);
};
