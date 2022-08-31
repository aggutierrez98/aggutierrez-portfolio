export interface Project {
  title: string;
  description: string;
  front_github_url: string;
  back_github_url: string;
  demo_url: string;
  server_url: string;
  image_url?: string;
  techs: string[];
}

export interface Skill {
  name: string;
  color: string;
  assetName: string;
  url?: string;
}

export interface Work {
  title: string;
  place: string;
  time: string;
  tasks: string[];
}
