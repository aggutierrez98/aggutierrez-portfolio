import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { LayeredWaves, ProjectDetails } from "components";
import { Project, MediaData, MetaData } from "interfaces";
import {
  getProjectsData,
  getSocialMediaData,
  loadProjectTechsData,
  getMetaData,
  getSkillsData,
} from "helpers";

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
  const {
    title: prjTitle,
    images_data: { image_url: prjImage },
  } = projectData;

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
  const projectNames = projects.map((project) => project.title);

  const paths = projectNames.map((name: string) => ({
    params: { name },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;

  const metadata = await getMetaData();
  const socialMediaData = await getSocialMediaData();
  const projects = await getProjectsData();
  const skillsData = await getSkillsData();

  let projectData = projects.find(
    (project: Project) =>
      project.title.toLocaleUpperCase() === name?.toLocaleUpperCase()
  );

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
      socialMediaData,
    },
    revalidate: 300,
  };
};

export default ProjectPage;
