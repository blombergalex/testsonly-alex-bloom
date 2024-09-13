'use client'

import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import ProjectSection from "@/components/ProjectSection";
import Navigation from "@/components/Navigation";
import { about, connect, projects } from "@/utils/data";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const aboutMeInView = useInView(aboutMeRef);
  const projectInView = useInView(projectRef);
  const connectInView = useInView(connectRef);

  const handleScrollToSection = (section: "aboutMe" | "projects" | "connect") => {
    const ref = section === "aboutMe" ? aboutMeRef : section === "projects" ? projectRef : connectRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation onScrollToSection={handleScrollToSection} />
      <div
        ref={aboutMeRef}
        className={`min-h-screen ${aboutMeInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
      >
        <AboutMe {...about} />
      </div>
      <div
        ref={projectRef}
        className={`min-h-screen ${projectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
      >
        <ProjectSection projects={projects} />
      </div>
      <div
        ref={connectRef}
        className={`min-h-screen ${connectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
      >
        <Connect {...connect} />
      </div>
    </>
  );
}
