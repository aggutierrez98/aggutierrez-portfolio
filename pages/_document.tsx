import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const fontData = {
    source: "https://fonts.googleapis.com/css2",
    fonts: [
      "family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,200;1,300;1,400;1,500",
      "family=Source+Code+Pro:wght@200;300;400",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00ADB5" />
        <meta name="msapplication-TileColor" content="#00ADB5" />
        <meta name="theme-color" content="#2B3338" />
        <meta name="author" content="Agustin Gutierrez"></meta>
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
