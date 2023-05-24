import "../styles/globals.css";
import "../styles/theme.css";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Source_Code_Pro, Raleway } from "next/font/google";
import { MainLayout } from "components";
import { ToastProvider } from "context/ToastContext";
import { usePreserveScroll } from "hooks";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({
  weight: ["200", "300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Raleway-font",
});

const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--SourceCodePro-font",
});

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

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence exitBeforeEnter>
          <m.div
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
            <ToastProvider>
              <div className={`${raleway.variable} ${sourceCodePro.variable}`}>
                <MainLayout {...pageProps}>
                  <Component {...pageProps} />
                  <Analytics />
                </MainLayout>
              </div>
            </ToastProvider>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}
