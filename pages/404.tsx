import Head from "next/head";
import { Metadata } from "../interfaces/index";
import LayeredWaves from "@c/dividers/LayeredWaves";
import metadata from "data/metadata/index.json";
import { useRouter } from "next/router";
import { NotFoundSign } from "components";

interface Props {
  metaData: Metadata;
}

const HomePage = ({ metaData }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const seo = {
    title: metaData.title,
    description: metaData.description,
    url: `${origin}${pathname}`,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Page Not Found | ${seo.title}`}</title>
        <meta name="description" content={`${seo.description}`} />
        <meta name="image" content={`${origin}/banner.jpg`} />

        <meta property="og:title" content={`Page Not Found | ${seo.title}`} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={`${origin}/banner.jpg`} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Page Not Found | ${seo.title}`} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${origin}/banner.jpg`} />
      </Head>

      <NotFoundSign />

      <LayeredWaves color="#222830" />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {
      metaData: metadata,
    },
  };
};
