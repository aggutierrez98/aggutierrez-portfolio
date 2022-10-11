import Head from "next/head";
import projects from "data/projects.json";
import data from "data/info.json";
import works from "data/experience.json";
import {
  ProjectsModule,
  Home,
  ContactModule,
  About,
  WorkModule,
} from "components";
import { Metadata, Project } from "../interfaces/index";
import LayeredWaves from "@c/dividers/LayeredWaves";
import WaveSmooth from "components/dividers/WaveSmooth";
import metadata from "data/metadata/index.json";
import { useRouter } from "next/router";

interface Props {
  projects: Project[];
  metaData: Metadata;
}

const HomePage = ({ projects, metaData }: Props) => {
  const { home: homeData, about: aboutData } = data;
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const seo = {
    title: metaData.title,
    description: metaData.description,
    image_source: metadata.image_source,
    url: `${origin}${pathname}`,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${seo.title}`}</title>
        <meta name="description" content={`${seo.description}`} />
        <meta name="image" content={`${seo.image_source}/banner.png`} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={`${seo.image_source}/banner.png`} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${seo.image_source}/banner.png`} />
      </Head>

      <Home data={homeData} />

      <WaveSmooth number={1} />

      <About data={aboutData} />

      <WaveSmooth number={2} />

      <WorkModule works={works} />

      <WaveSmooth number={1} />

      <ProjectsModule projects={projects} />

      <WaveSmooth number={2} />

      <ContactModule />

      <LayeredWaves color="#2B3338" />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {
      projects,
      metaData: metadata,
    },
  };
};
