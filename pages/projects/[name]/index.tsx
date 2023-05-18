import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Project, MediaData, MetaData } from "interfaces";
import { ProjectDetails } from "components/projects/ProjectDetails";
import { LayeredWaves } from "components";
import { useRouter } from "next/router";
import {
  getProjectsData,
  getSocialMediaData,
  loadProjectTechsData,
} from "helpers";
import { getMetaData, getSkillsData } from "helpers/fetchData";

interface Props {
  metadata: MetaData;
  projectData: Project;
  socialMedia: MediaData;
}

const ProjectPage = ({ projectData, metadata }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const { title, description, image_source } = metadata[pathname];
  const url = `${origin}${pathname}`;
  const { title: prjTitle, image_url: prjImage } = projectData;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} ${prjTitle}`}</title>
        <meta name="description" content={`${description} ${prjTitle}`} />
        <meta name="image" content={prjImage ? prjImage : image_source} />
        <meta property="og:title" content={`${title} ${prjTitle}`} />
        <meta
          property="og:description"
          content={`${description} ${prjTitle}`}
        />
        <meta
          property="og:image"
          content={prjImage ? prjImage : image_source}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} ${prjTitle}`} />
        <meta
          name="twitter:description"
          content={`${description} ${prjTitle}`}
        />
        <meta
          name="twitter:image"
          content={prjImage ? prjImage : image_source}
        />
      </Head>
      <main className="detailsBody">
        <ProjectDetails projectData={projectData} />

        <LayeredWaves alt />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjectsData();
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

  const metadata = await getMetaData();
  const socialMedia = await getSocialMediaData();
  const projects = await getProjectsData();
  const skillsData = await getSkillsData();

  let projectData = projects.find((project: Project) => project.title === name);

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  projectData.techs = loadProjectTechsData(projectData!, skillsData);

  return {
    props: {
      metadata,
      projectData,
      socialMedia,
    },
    revalidate: 300,
  };
};

export default ProjectPage;
