import Head from "next/head";
import projects from "data/projects.json";
import data from "data/info.json";
import works from "data/experience.json";
import { ProjectsModule } from "components";
import { Project } from "../interfaces/index";
import { Home, ContactModule, About } from "components";
import { WorkModule } from "components";

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

      <About data={aboutData} />

      <WorkModule works={works} />

      <ProjectsModule projects={projects} />

      <ContactModule />
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
