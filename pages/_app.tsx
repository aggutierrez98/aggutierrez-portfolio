import "../styles/globals.css";
import "../styles/theme.css";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { MainLayout } from "components";
import { AnimatePresence, motion } from "framer-motion";
import { ToastProvider } from "context/ToastContext";
import { usePreserveScroll } from "hooks";

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
  usePreserveScroll();

  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <ToastProvider>
          <MainLayout>{page}</MainLayout>
        </ToastProvider>
      );
    });

  return getLayout(
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.pathname}
        animate="enter"
        exit="exit"
        initial="hidden"
        transition={{ type: "spring", duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
