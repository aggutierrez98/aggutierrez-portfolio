import Head from "next/head";
import projects from "data/projects.json";
import data from "data/info.json";
import works from "data/experience.json";
import { ProjectsModule } from "components";
import { Project } from "../interfaces/index";
import { Home, ContactModule, About } from "components";
import { WorkModule } from "components";
import LayeredWaves from "@c/dividers/LayeredWaves";
import WaveSmooth from "components/dividers/WaveSmooth";

interface Props {
  projects: Project[];
}

const HomePage = ({ projects }: Props) => {
  const { home: homeData, about: aboutData } = data;

  return (
    <>
      <Head>
        <title>Aggutierrez</title>
        <meta name="description" content="Agustin Gutierrez web page" />
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
    },
  };
};
