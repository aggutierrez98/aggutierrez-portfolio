import axios from "axios";
import { MediaData, Project, Skill, Work, Info, MetaData } from "interfaces";

const dataInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RAW_DATA_URL,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GH_DATA_TOKEN}`,
  },
});

export const getExperienceData = async () => {
  const resp = await dataInstance.get<any>("experience.json");
  return resp.data as Work[];
};

export const getSocialMediaData = async () => {
  const resp = await dataInstance.get<any>("social-media.json");
  return resp.data as MediaData;
};

export const getSkillsData = async () => {
  const resp = await dataInstance.get<any>("skills.json");
  return resp.data as Skill[];
};

export const getProjectsData = async () => {
  const resp = await dataInstance.get<any>("projects.json");
  return resp.data as Project[];
};

export const getInfoData = async () => {
  const resp = await dataInstance.get<any>("info.json");
  return resp.data as Info;
};

export const getMetaData = async () => {
  const resp = await dataInstance.get<any>("metadata.json");
  return resp.data as MetaData;
};
