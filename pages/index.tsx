import Head from "next/head";
import projects from "../data/projects.json";
import data from "../data/info.json";
import { ProjectsList } from "../components/ProjectsList";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aggutierrez</title>
        <meta name="description" content="Agustin Gutierrez web page" />
      </Head>

      <h1 id="#about">{data.title}</h1>

      <ProjectsList projects={projects} />
    </>
  );
};

export default Home;
