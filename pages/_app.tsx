import "../styles/globals.css";
import "../styles/theme.css";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { MainLayout } from "../layouts/MainLayout";
import { AnimatePresence, motion } from "framer-motion";
import { usePreviousPathname } from "../hooks/usePreviousPathname";
import { getPagesVariants } from "../helpers/getPagesVariants";
import { ToastProvider } from "../context/ToastContext";

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
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.pathname}
        animate="enter"
        exit="exit"
        initial="hidden"
        transition={{ type: "spring", duration: 0.3, delay: 0 }}
        variants={getPagesVariants(router.pathname, prevPath)}
      >
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </motion.div>
    </AnimatePresence>
  );
}
