import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import projects from "data/projects.json";
import { Metadata, Project } from "interfaces";
import { ProjectDetails } from "components/projects/ProjectDetails";
import LayeredWaves from "@c/dividers/LayeredWaves";
import metadata from "data/metadata/project.json";
import { useRouter } from "next/router";

interface Props {
  projectData: Project;
  metaData: Metadata;
}

const ProyectPage = ({ projectData, metaData }: Props) => {
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
        <title>{`${seo.title} ${projectData.title}`}</title>
        <meta name="description" content="Agustin Gutierrez web page" />
        <meta
          name="description"
          content={`${seo.description} ${projectData.title}`}
        />
        <meta
          name="image"
          content={
            projectData.image_url
              ? projectData.image_url
              : `${origin}/banner.jpg`
          }
        />
        <meta
          property="og:title"
          content={`${seo.title} ${projectData.title}`}
        />
        <meta
          property="og:description"
          content={`${seo.description} ${projectData.title}`}
        />
        <meta
          property="og:image"
          content={
            projectData.image_url
              ? projectData.image_url
              : `${origin}/banner.jpg`
          }
        />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${seo.title} ${projectData.title}`}
        />
        <meta
          name="twitter:description"
          content={`${seo.description} ${projectData.title}`}
        />
        <meta
          name="twitter:image"
          content={
            projectData.image_url
              ? projectData.image_url
              : `${origin}/banner.jpg`
          }
        />
      </Head>
      <main className="detailsBody">
        <ProjectDetails projectData={projectData} />

        <LayeredWaves color="#222830" />
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
      metaData: metadata,
    },
    // revalidate: 10,
  };
};
