import { AboutMeType, ConnectType, ProjectType } from "./types";

export const AboutMockData: AboutMeType = {
  start: "This is a mock description written for the purpose of testing",
  experience:
    "This is a mock description of my experience for the purpose of testing",
  nextStep: "This is a mock description about the next step in my career",
  purpose: "This is a mock description of the purpose of this site",
};

export const ConnectMockData: ConnectType = {
  connectText: "This is a mocktext for the connect section",
  imgSrc: "/images/mock-profile.jpg",
  alt: "Mock alt text for testing purposes",
};


export const mockProjects: ProjectType[] = [
  {
    id: "1",
    title: "Project 1",
    date: "month year",
    imgSrc: "/images/project1.png",
    alt: "Snapshot of Project 1.",
    description: "Description of Project 1.",
    githubLink: "https://mock.github.com/project-1",
    websiteLink: "https://project-1.com",
    favourite: false,
  },
  {
    id: "2",
    title: "Project 2",
    date: "month year",
    imgSrc: "/images/project2.png",
    alt: "Snapshot of Project 2.",
    description: "Description of Project 2.",
    githubLink: "https://mock.github.com/project-2",
    websiteLink: "https://project-2.com",
    favourite: false,
  },
  {
    id: "3",
    title: "Project 3",
    date: "month year",
    imgSrc: "/images/project3.png",
    alt: "Snapshot of Project 3.",
    description: "Description of Project 3.",
    githubLink: "https://mock.github.com/project-3",
    websiteLink: "https://project-3.com",
    favourite: false,
  },
  {
    id: "4",
    title: "Project 4",
    date: "month year",
    imgSrc: "/images/project4.png",
    alt: "Snapshot of Project 4.",
    description: "Description of Project 4.",
    githubLink: "https://mock.github.com/project-4",
    websiteLink: "https://project-4.com",
    favourite: false,
  },
  {
    id: "5",
    title: "Project 5",
    date: "month year",
    imgSrc: "/images/project5.png",
    alt: "Snapshot of Project 5.",
    description: "Description of Project 5. ",
    githubLink: "https://mock.github.com/project-5",
    websiteLink: "https://project-5.com",
    favourite: false,
  },
  {
    id: "6",
    title: "Project 6",
    date: "month year",
    imgSrc: "/images/project6.png",
    alt: "Snapshot of Project 6.",
    description: "Description of Project 6.",
    githubLink: "https://mock.github.com/project-6",
    websiteLink: "https://project-6.com",
    favourite: false,
  },
  {
    id: "7",
    title: "Project 7",
    date: "month year",
    imgSrc: "/images/project7.png",
    alt: "Snapshot of Project 7.",
    description: "Description of Project 7",
    githubLink: "https://mock.github.com/project-7",
    websiteLink: "https://project-7.com",
    favourite: false,
  },
];