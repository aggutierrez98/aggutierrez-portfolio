import "../styles/globals.css";
import "../styles/theme.css";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { MainLayout } from "components";
import { AnimatePresence, motion } from "framer-motion";
import { usePreviousPathname } from "hooks/usePreviousPathname";
import { getPagesVariants } from "helpers/getPagesVariants";
import { ToastProvider } from "context/ToastContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const prevPath = usePreviousPathname(router.asPath);

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <ToastProvider>
        <MainLayout>{page}</MainLayout>
      </ToastProvider>
    ));

  return getLayout(
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => {
        document.getElementById("main-layout")!.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <motion.div
        key={router.pathname}
        animate="enter"
        exit="exit"
        initial="hidden"
        transition={{ type: "spring", duration: 0.3, delay: 0 }}
        variants={getPagesVariants(router.pathname, prevPath)}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
