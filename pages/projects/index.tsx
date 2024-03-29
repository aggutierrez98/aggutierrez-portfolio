import Head from "next/head";
import { GetStaticProps } from "next";
import { ProjectsModule, LayeredWaves } from "components";
import { Project, MediaData, MetaData } from "interfaces";
import { useRouter } from "next/router";
import {
  getProjectsData,
  loadProjectsData,
  getMetaData,
  getSkillsData,
  getSocialMediaData,
} from "helpers";

interface Props {
  metadata: MetaData;
  projects: Project[];
  socialMediaData: MediaData;
}

const ProjectsPage = ({ projects, metadata }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();
  const { title, description, image_source } = metadata[pathname];
  const url = `${origin}${pathname}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image_source} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image_source} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image_source} />
      </Head>

      <ProjectsModule projects={projects} isProjectsPage={true} />

      <LayeredWaves alt />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const metadata = await getMetaData();
  const socialMediaData = await getSocialMediaData();
  const skillsData = await getSkillsData();
  let projects = await getProjectsData();

  projects = loadProjectsData(projects, skillsData);

  return {
    props: {
      metadata,
      projects,
      socialMediaData,
    },
    revalidate: 300,
  };
};

export default ProjectsPage;
