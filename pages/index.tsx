import Head from "next/head";
import projects from "data/projects.json";
import data from "data/info.json";
import works from "data/experience.json";
import { ProjectsModule } from "components";
import { Metadata, Project } from "../interfaces/index";
import { Home, ContactModule, About } from "components";
import { WorkModule } from "components";
import LayeredWaves from "@c/dividers/LayeredWaves";
import WaveSmooth from "components/dividers/WaveSmooth";
import metadata from "data/metadata/index.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    url: `${origin}${pathname}`,
  };

  return (
    <>
      <Head>
        <title>{`${seo.title}`}</title>
        <meta name="description" content={`${seo.description}`} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={`${origin}/banner.jpg`} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={`${origin}/banner.jpg`} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${origin}/banner.jpg`} />
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
