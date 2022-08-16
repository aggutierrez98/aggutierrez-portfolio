import Head from "next/head";
import projects from "data/projects.json";
import { home as homeData, about as aboutData } from "data/info.json";
import { ProjectsModule } from "components";
import { Project } from "../interfaces/index";
import { Home, ContactModule, About } from "components";

interface Props {
  projects: Project[];
}

const HomePage = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Aggutierrez</title>
        <meta name="description" content="Agustin Gutierrez web page" />
      </Head>

      <Home data={homeData} />

      <About data={aboutData} />

      <ProjectsModule projects={projects} />

      {/* <h1 id="work">Work</h1> */}

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
