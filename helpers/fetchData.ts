import axios from "axios";
import { MediaData, Project, Skill, Work, Info } from "interfaces";

const binInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_JB_URL}`,
});

binInstance.defaults.headers.common["X-Master-Key"] =
  "$2b$10$S8MCS.OJJqV07pACFE.jJuT32kmkrUZZUxTReIQwRG6FSwnUZXvxq";
binInstance.defaults.headers.common["X-Bin-Meta"] = false;

interface BinResponse {
  metadata?: {
    id: string;
    private: boolean;
    createdAt: string;
  };
  record: any;
}

export const getExperienceData = async () => {
  const resp = await binInstance.get<BinResponse>(
    process.env.NEXT_PUBLIC_JB_EXPERIENCE_ID!
  );
  return resp.data.record as Work[];
};

export const getSocialMediaData = async () => {
  const resp = await binInstance.get<BinResponse>(
    process.env.NEXT_PUBLIC_JB_SOCIAL_MEDIA_ID!
  );
  return resp.data.record as MediaData;
};

export const getSkillData = async (name: string) => {
  binInstance.defaults.headers.common[
    "X-Json-Path"
  ] = `$[?(@.name=="${name}")]`;
  const resp = await binInstance.get<BinResponse>(
    process.env.NEXT_PUBLIC_JB_SKILLS_ID!
  );
  return resp.data.record[0] as Skill;
};

export const getProjectsData = async () => {
  const resp = await binInstance.get<BinResponse>(
    process.env.NEXT_PUBLIC_JB_PROJECTS_ID!
  );
  return resp.data.record as Project[];
};

export const getInfoData = async () => {
  const resp = await binInstance.get<BinResponse>(
    process.env.NEXT_PUBLIC_JB_INFO_ID!
  );
  return resp.data.record as Info;
};
