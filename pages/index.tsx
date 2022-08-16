import Head from "next/head";
import projects from "data/projects.json";
import data from "data/info.json";
import { ProjectsList } from "components/projects/ProjectsList";
import { Project } from "../interfaces/index";
import { Aggutierrez, ContactModule } from "components";

interface Props {
  projects: Project[];
}

const Home = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Aggutierrez</title>
        <meta name="description" content="Agustin Gutierrez web page" />
      </Head>

      <Aggutierrez />

      <h1 id="projects">Projects</h1>
      <ProjectsList projects={projects} />

      <h1 id="work">Work</h1>

      <h1 id="contact">Contact</h1>
      <ContactModule />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};
