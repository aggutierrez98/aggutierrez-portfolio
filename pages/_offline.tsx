import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { LayeredWaves, OfflineSign } from "components";
import { MetaData } from "interfaces";
import { getMetaData } from "helpers";

interface Props {
  metadata: MetaData;
}

const OfflinePage = ({ metadata }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();
  const { title, description, image_source } = metadata[pathname];
  const url = `${origin}${pathname}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image_source} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content={image_source}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image_source} />
      </Head>

      <OfflineSign />

      <LayeredWaves alt />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const metadata = await getMetaData();

  return {
    props: {
      metadata,
    },
  };
};

export default OfflinePage;
