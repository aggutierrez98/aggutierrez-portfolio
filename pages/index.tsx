import Head from "next/head";
import {
  ProjectsModule,
  Home,
  ContactModule,
  About,
  WorkModule,
  LayeredWaves,
  WaveSmooth,
  MainLayout,
} from "components";
import { Project, Info, Work, MediaData, Skill } from "interfaces";
import { useRouter } from "next/router";
import {
  getExperienceData,
  getProjectsData,
  getInfoData,
  loadSkillsInfo,
  loadProjectsData,
} from "helpers";
import { ReactElement } from "react";
import { getSocialMediaData } from "../helpers/fetchData";

interface Props {
  projects: Project[];
  info: Info;
  experience: Work[];
  socialMedia: MediaData;
}

const HomePage = ({ projects, experience, info }: Props) => {
  const { home: homeData, about: aboutData } = info;
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <WaveSmooth number={1} />

      <About data={aboutData} />

      <WaveSmooth number={2} />

      <WorkModule works={experience} />

      <WaveSmooth number={1} />

      <ProjectsModule projects={projects} />

      <WaveSmooth number={2} />

      <ContactModule />

      <LayeredWaves color="#2B3338" />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout socialMedia={page.props.socialMedia}>{page}</MainLayout>;
};

export default HomePage;

export const getStaticProps = async () => {
  const experience = await getExperienceData();
  const socialMedia = await getSocialMediaData();
  let projects = await getProjectsData();
  let info = await getInfoData();

  //@ts-ignore
  info.about.skills = await loadSkillsInfo(info.about.skills);

  //@ts-ignore
  projects = await loadProjectsData(projects);

  return {
    props: {
      projects,
      experience,
      socialMedia,
      info,
    },
  };
};
