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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
