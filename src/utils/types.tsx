export type ProjectType = {
  id: string;
  title: string;
  date: string;
  imgSrc: string;
  alt: string;
  description: string;
  githubLink: string;
  websiteLink: string;
  favourite: boolean;
};

export type AboutMeType = {
  start: string;
  experience: string;
  nextStep: string;
  purpose: string;
};

export type ConnectType = {
  connectText: string;
  alt: string;
  imgSrc: string;
};
