import "../styles/globals.css";
import "../styles/theme.css";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { MainLayout } from "components";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { ToastProvider } from "context/ToastContext";
import { usePreserveScroll } from "hooks";
import Head from "next/head";
// import { Source_Code_Pro, Raleway } from "@next/font/google";

// const raleway = Raleway({
//   weight: ["200", "300", "400", "500", "600"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const sourceCodePro = Source_Code_Pro({
//   weight: ["300", "400"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });

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
      {/* <style jsx global>{`
        html {
          font-family: ${raleway.style.fontFamily};
          font-family: ${sourceCodePro.style.fontFamily};
        }
      `}</style> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              <MainLayout {...pageProps}>
                <Component {...pageProps} />
              </MainLayout>
            </ToastProvider>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}
