import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Project, MediaData } from "interfaces";
import { ProjectDetails } from "components/projects/ProjectDetails";
import { LayeredWaves } from "components";
import { useRouter } from "next/router";
import {
  getProjectsData,
  getSocialMediaData,
  loadProjectTechsData,
} from "helpers";
import { getSkillsData } from "helpers/fetchData";

interface Props {
  projectData: Project;
  socialMedia: MediaData;
}

const ProjectPage = ({ projectData }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const seo = {
    title: "Aggutierrez | ",
    description: "Agustin Gutierrez project: ",
    image_source:
      "https://res.cloudinary.com/aggutierrez/image/upload/v1665500194/Portfolio",
    url: `${origin}${pathname}`,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              : `${seo.image_source}/banner.png`
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
              : `${seo.image_source}/banner.png`
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
              : `${seo.image_source}/banner.png`
          }
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
      projectData,
      socialMedia,
    },
    revalidate: 300,
  };
};

export default ProjectPage;
