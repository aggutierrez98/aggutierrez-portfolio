import Head from "next/head";
import { useRouter } from "next/router";
import { NotFoundSign, LayeredWaves } from "components";

const HomePage = () => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const seo = {
    title: "Aggutierrez",
    description:
      "This is Agustin Gutierrez's portfolio page with projects and experience about him.",
    image_source:
      "https://res.cloudinary.com/aggutierrez/image/upload/v1665500194/Portfolio",
    url: `${origin}${pathname}`,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Page Not Found | ${"Aggutierrez"}`}</title>
        <meta name="description" content={`${seo.description}`} />
        <meta name="image" content={`${seo.image_source}/banner.png`} />

        <meta property="og:title" content={`Page Not Found | ${seo.title}`} />
        <meta property="og:description" content={seo.description} />
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content={`${seo.image_source}/banner.png`}
        />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Page Not Found | ${seo.title}`} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${seo.image_source}/banner.png`} />
      </Head>

      <NotFoundSign />

      <LayeredWaves alt />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
