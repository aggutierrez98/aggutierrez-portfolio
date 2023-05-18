import Head from "next/head";
import {
  ProjectsModule,
  Home,
  ContactModule,
  About,
  WorkModule,
  LayeredWaves,
  WaveSmooth,
} from "components";
import { Project, Info, Work, MetaData } from "interfaces";
import { useRouter } from "next/router";
import {
  getExperienceData,
  getProjectsData,
  getInfoData,
  loadSkillsInfo,
  loadProjectsData,
} from "helpers";
import { getMetaData, getSkillsData } from "helpers/fetchData";
import { GetStaticProps } from "next";

interface Props {
  metadata: MetaData;
  projects: Project[];
  info: Info;
  experience: Work[];
}

const HomePage = ({ projects, experience, info, metadata }: Props) => {
  const { home: homeData, about: aboutData, contact: contactData } = info;
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

      <Home data={homeData} />

      <WaveSmooth alt={1} />

      <About data={aboutData} />

      <WaveSmooth alt={2} />

      <WorkModule works={experience} />

      <WaveSmooth alt={1} />

      <ProjectsModule projects={projects} />

      <WaveSmooth alt={2} />

      <ContactModule data={contactData} />

      <LayeredWaves />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const metadata = await getMetaData();
  const experience = await getExperienceData();
  const skillsData = await getSkillsData();
  let projects = await getProjectsData();
  let info = await getInfoData();

  info.about.skills = loadSkillsInfo(info.about.skills, skillsData);
  projects = loadProjectsData(projects, skillsData);

  return {
    props: {
      metadata,
      projects,
      experience,
      info,
    },
    revalidate: 300,
  };
};

export default HomePage;
