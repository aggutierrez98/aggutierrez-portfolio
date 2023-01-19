import Head from "next/head";
import { ProjectsModule, LayeredWaves } from "components";
import { Project, Info, Work, MediaData } from "interfaces";
import { useRouter } from "next/router";
import { getProjectsData, loadProjectsData } from "helpers";
import { getSkillsData, getSocialMediaData } from "helpers/fetchData";

interface Props {
  projects: Project[];
  socialMedia: MediaData;
}

const ProjectsPage = ({ projects }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const seo = {
    title: "Aggutierrez",
    description: "Agustin Gutierrez projects page",
    image_source:
      "https://res.cloudinary.com/aggutierrez/image/upload/v1665500194/Portfolio",
    url: `${origin}${pathname}`,
  };

  return (
    <>
      <Head>
        <title>{`${seo.title}`}</title>
        <meta name="description" content={`${seo.description}`} />
        <meta name="image" content={`${seo.image_source}/banner.png`} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={`${seo.image_source}/banner.png`} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${seo.image_source}/banner.png`} />
      </Head>

      <ProjectsModule projects={projects} isProjectsPage={true} />

      <LayeredWaves color="#222831" />
    </>
  );
};

export const getStaticProps = async () => {
  const socialMedia = await getSocialMediaData();
  const skillsData = await getSkillsData();
  let projects = await getProjectsData();

  projects = loadProjectsData(projects, skillsData);

  return {
    props: {
      projects,
      socialMedia,
    },
    revalidate: 1200,
  };
};

export default ProjectsPage;
