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
import { Project, Info, Work, MediaData } from "interfaces";
import { useRouter } from "next/router";
import {
  getExperienceData,
  getProjectsData,
  getInfoData,
  loadSkillsInfo,
  loadProjectsData,
} from "helpers";
import { getSkillsData, getSocialMediaData } from "helpers/fetchData";

interface Props {
  projects: Project[];
  info: Info;
  experience: Work[];
  socialMedia: MediaData;
}

const HomePage = ({ projects, experience, info, socialMedia }: Props) => {
  const { home: homeData, about: aboutData, contact: contactData } = info;
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { pathname } = useRouter();

  const seo = {
    title: "Aggutierrez",
    description:
      "This is Agustin Gutierrez's portfolio page with projects and experience about him.",
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

export const getStaticProps = async () => {
  const experience = await getExperienceData();
  const socialMedia = await getSocialMediaData();
  const skillsData = await getSkillsData();
  let projects = await getProjectsData();
  let info = await getInfoData();

  info.about.skills = loadSkillsInfo(info.about.skills, skillsData);
  projects = loadProjectsData(projects, skillsData);

  return {
    props: {
      projects,
      experience,
      socialMedia,
      info,
    },
    revalidate: 300,
  };
};

export default HomePage;
