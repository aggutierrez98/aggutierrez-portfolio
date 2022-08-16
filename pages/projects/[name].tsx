import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import projects from "data/projects.json";
import { Project } from "interfaces";
import { ProjectDetails } from "components/projects/ProjectDetails";

interface Props {
  projectData: Project;
}

const ProyectPage = ({ projectData }: Props) => {
  return (
    <>
      <Head>
        <title>Proyects</title>
        <meta name="description" content="Proyects made by aggutierrez" />
      </Head>
      <main>
        <ProjectDetails projectData={projectData} />
      </main>
    </>
  );
};

export default ProyectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const proyectNames = projects.map((proyect) => proyect.title);

  const paths = proyectNames.map((name: string) => ({
    params: { name },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name;

  const projectData = projects.find((project) => project.title === name);

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectData,
    },
    // revalidate: 10,
  };
};
