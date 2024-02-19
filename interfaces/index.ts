export interface Project {
  title: string;
  description: string;
  front_github_url: string;
  back_github_url: string;
  demo_url: string;
  server_url: string;
  images_data: {
    main_image: string;
    image_url?: string;
    folder?: string;
    count?: number;
  };
  techs: string[] | Skill[];
}

export interface Work {
  title: string;
  place: string;
  place_url?: string;
  time: string;
  tasks: string[];
}

export interface MetaData {
  [index: string]: MetaDataEntry;
}

export interface MetaDataEntry {
  title: string;
  description: string;
  image_source: string;
}

export interface MediaData {
  github: MediaDataEntry;
  linkedin: MediaDataEntry;
  mail: MediaDataEntry;
  discord: MediaDataEntry;
}

export interface MediaDataEntry {
  link?: string;
  icon: string;
  title: string;
  action?: string;
}

export interface Info {
  home: Home;
  about: About;
  contact: Contact;
}

export interface About {
  avatar_img: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  skills: Skills;
}

export interface Contact {
  title: string;
  description1: string;
  description2: string;
  suboptions: {
    phone: ContactCard;
    email: ContactCard;
  };
  image: string;
  alt: string;
}

export interface ContactCard {
  title: string;
  value: string;
  link?: string;
}

export interface Skill {
  name: string;
  color: string;
  assetName: string;
  url?: string;
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
