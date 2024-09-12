import { AboutMeType, ConnectType, ProjectType } from "./types";
import { v4 as uuidv4 } from "uuid";

export const about: AboutMeType = {
  start:
    "My curiosity for coding was sparked by seeing friends work in development. I began learning through online courses and quickly realized how much enjoy it. A year later, I started my formal education in frontend development. I've always loved puzzles and problem solving so discovering coding feels like finding a gold mine in which I am thrilled to continue digging.",
  experience:
    "So far in my journey I've worked with React, TypeScript, Next.js, Vite, and CSS frameworks like SASS, Tailwind, and MUI. I implement responsive web design in all my projects to ensure a smooth and intuitive interface across all devices. Git is an essential tool that brings control and efficiency in my work as I've grown increasingly comfortable with its power. I love playing around with API data fetching and have experience working within Scrum teams through sprints.",
  nextStep:
    "As I near the completion of my studies, I'm excited for the next phase of my career. Thanks to the continual learning this field offers, I look forward to pursuing opportunities that allow me to further develop my coding skills. My goal is to join a collaborative team where I can apply my current knowledge and have the space and mentorship to continue growing.",
  purpose:
    "This page is designed to give you a glimpse into my journey by showcasing some of the projects that I've worked on. In the making of this portfolio, I learned to write unit and integration tests using Jest and React Testing Library. I discovered that I enjoy testing and it has become an area of development that I want to explore further in my career.",
};

export const connect: ConnectType = {
  connectText:
    "Whether you're a fellow student, a future colleague, or a potential employer, I hope this space helps us connect. Take a look at my projects, and if you'd like to chat or collaborate, feel free to reach out! I'm always excited to connect and explore new opportunities.",
  imgSrc: "/images/profil.png",
  alt: "Black and white image of Alexandra smiling",
};

export const projects: ProjectType[] = [
  {
    id: uuidv4(),
    title: "My Portfolio",
    date: "September 2024",
    imgSrc: "/images/portfolio.png",
    alt: "Snapshot of frontend developer portfolio created by Alexandra Blomberg",
    description:
      "This portfolio marks my first project working with unit and integration tests. I learned to use Jest and React Testing Library to set up the tests, and built the components based on them. One of the best takeaways from this project is discovering that I enjoy testing and the control it gives of the development process. Created with React, Next.js, TypeScript and Tailwind CSS.",
    githubLink: "https://github.com/blombergalex/alex-bloom",
    websiteLink: "https://alex-bloom.vercel.app/",
    favourite: false,
  },
  {
    id: uuidv4(),
    title: "Music Library 2.0",
    date: "August 2024",
    imgSrc: "/images/music-library2.0.png",
    alt: "Snapshot of The Music Library 2.0, showing an artist search and displaying listen previews from Spotify",
    description:
      "The Music Library 2.0 is a remake of my earlier creation The Music Library. In this version, the user can enter a search of an artist, and the most matched result is displayed along with up to ten of the artist's most played albums on Spotify. Use of the following was practiced: React, Vite, TypeScript, API data fetching and MUI's Material UI library.",
    githubLink: "https://github.com/blombergalex/music-library2.0",
    websiteLink: "https://music-library2-0.vercel.app",
    favourite: false,
  },
  {
    id: uuidv4(),
    title: "Parking Time Sweden",
    date: "June 2024",
    imgSrc: "/images/parking-time.png",
    alt: "Snapshot of the website Parking Time Sweden, showcasing its hero image and unique selling points.",
    description:
      "UX designers, Agile Project Manager and me as part of the frontend develoment team worked together to give Parking Time Sweden a new face and improved user experience. Created with React, Next.js, Tailwind and next-intl for internationalization. The project took place over four intense week-long sprints, where our engaged and motivated team was invaluable.",
    githubLink:
      "https://github.com/Diyako-Qadri/parking-time-sweden-ab/tree/main",
    websiteLink: "https://parking-time-sweden-ab.vercel.app",
    favourite: false,
  },
  {
    id: uuidv4(),
    title: "The Music Library",
    date: "April 2024",
    imgSrc: "/images/music-library.png",
    alt: "Snapshot of app The Music Library showcasing some recommendations of sweet albums",
    description:
      "This is my first React creation where I expanded my understanding of the core React concepts of functional components, props, and state. Created with React, Vite and using CSS modules for the styling. I enjoyed learning to store the data in objects and effectively mapping over them to turn them into albums on the user's end.",
    githubLink: "https://github.com/blombergalex/the-music-library",
    websiteLink: "https://the-music-library.netlify.app/",
    favourite: false,
  },
  {
    id: uuidv4(),
    title: "Jungle Jam",
    date: "February 2024",
    imgSrc: "/images/jungle-jam.png",
    alt: "Snapshot of API data fetching app Jungle Jam",
    description:
      "Jungle Jam is my first creation getting data from an external source and where I began to understand how much one can do in frontend development. In this app the user enters a search of an animal, triggering an API call, and is presented with facts on the requested animal. Created with HTML, CSS and JavaScript.",
    githubLink: "https://github.com/blombergalex/junglejam",
    websiteLink: "https://blombergalex.github.io/junglejam/",
    favourite: false,
  },
  {
    id: uuidv4(),
    title: "Wonderflora",
    date: "February 2024",
    imgSrc: "/images/wonderflora.png",
    alt: "Snapshot of EJS app Wonderflora",
    description:
      "Wonderflora is a floral shop where I practiced routing and using EJS templates. Thanks to this project I can say that I love how easy it is to create routes with Next.js. Technologies used for Wonderflora are EJS, CSS and JavaScript.",
    githubLink: "https://github.com/blombergalex/wonderflora",
    websiteLink: "https://wonderflora.onrender.com/",
    favourite: false,
  },
  {
    id: uuidv4(),
    title: "Hey Babareeba",
    date: "December 2023",
    imgSrc: "/images/hey-babareeba.png",
    alt: "Snapshot of my song game Hey Babareeba",
    description:
      "Hey Babareeba is a song game and my first vanilla JavaScript creation. It's a game where the user has to guess the name of the songs played, one word at a time. In the making of this game I gained an understanding of the fundamentals of Javascript while continuing to develop my skills with HTML and CSS.",
    githubLink: "https://github.com/blombergalex/song-game",
    websiteLink: "https://blombergalex.github.io/song-game/",
    favourite: false,
  },
];
