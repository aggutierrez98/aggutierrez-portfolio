import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const fontData = {
    source: "https://fonts.googleapis.com/css2",
    fonts: [
      "family=Raleway:wght@200;300;400;500;600",
      "family=Source+Code+Pro:wght@300;400",
    ],
    display: "display=swap",
  };

  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
        />
        <link rel="manifest" href="/manifest.json" />
        <html lang="en" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="msapplication-TileColor" content="#222831" />
        <meta name="theme-color" content="#222831" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222831" />
        <meta name="apple-mobile-web-app-status-bar" content="#222831" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/favicon-194x194.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="author" content="Agustin Gutierrez"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aggutierrez"></meta>
        <meta
          name="keywords"
          content="Aggutierrez, Agustin, Gutierrez, developer, software, engineer, web, mobile, backend, react, node, javascript, typescript"
        ></meta>
        <link
          href={`${fontData.source}?${fontData.fonts.join("&")}&${
            fontData.display
          }`}
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
