import Head from "next/head";
import Link from "next/link";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectsList } from "../../components/ProjectsList";
import projects from "../../data/projects.json";
import { Project } from "../../interfaces";

interface Props {
  projects: Project[];
}

const Proyects = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects made by aggutierrez" />
      </Head>

      <h1>Proyects</h1>

      <ProjectsList projects={projects} />
    </>
  );
};

export default Proyects;

export const getStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};
