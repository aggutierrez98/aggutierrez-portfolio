import { MediaData, Project, Skill, Work, Info, MetaData } from "interfaces";
const baseUrl = process.env.NEXT_PUBLIC_RAW_DATA_URL;

const config = {
  method: "GET",
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GH_DATA_TOKEN}`,
  },
};

export const getExperienceData = async () => {
  try {
    const resp = await fetch(`${baseUrl}/experience.json`, config);
    const data = await resp.json();
    return data as Work[];
  } catch (error: any) {
    console.log(error);
    throw new Error("Error when fetching data");
  }
};

export const getSocialMediaData = async () => {
  try {
    const resp = await fetch(`${baseUrl}/social-media.json`, config);
    const data = await resp.json();
    return data as MediaData;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error when fetching data");
  }
};

export const getSkillsData = async () => {
  try {
    const resp = await fetch(`${baseUrl}/skills.json`, config);
    const data = await resp.json();
    return data as Skill[];
  } catch (error: any) {
    console.log(error);
    throw new Error("Error when fetching data");
  }
};

export const getProjectsData = async () => {
  try {
    const resp = await fetch(`${baseUrl}/projects.json`, config);
    const data = await resp.json();
    return data as Project[];
  } catch (error: any) {
    console.log(error);
    throw new Error("Error when fetching data");
  }
};

export const getInfoData = async () => {
  try {
    const resp = await fetch(`${baseUrl}/info.json`, config);
    const data = await resp.json();
    return data as Info;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error when fetching data");
  }
};

export const getMetaData = async () => {
  try {
    const resp = await fetch(`${baseUrl}/metadata.json`, config);
    const data = await resp.json();
    return data as MetaData;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error when fetching data");
  }
};
