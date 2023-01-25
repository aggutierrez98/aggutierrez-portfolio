export interface Project {
  title: string;
  description: string;
  front_github_url: string;
  back_github_url: string;
  demo_url: string;
  server_url: string;
  image_url?: string;
  images_data?: {
    folder: string;
    count: number;
  };
  techs: string[] | Skill[];
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
  place_url?: string;
  time: string;
  tasks: string[];
}

export interface Metadata {
  title: string;
  description: string;
  image_source: string;
}

export interface MediaData {
  link?: string;
  icon: string;
  title: string;
  action?: string;
}

export interface Info {
  home: Home;
  about: About;
}

export interface About {
  avatar_img: string;
  title: string;
  description1: string;
  description2: string;
  skills: Skills;
}

export interface Skills {
  frontend?: string[] | Skill[];
  backend?: string[] | Skill[];
  database?: string[] | Skill[];
  others?: string[] | Skill[];
}

export interface SkillsDictionary {
  [index: string]: Skill[];
}

export interface Home {
  subtitle: string;
  title1: string;
  title2: string;
  specials: string[];
  description: string;
}
