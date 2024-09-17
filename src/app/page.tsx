'use client'

import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import ProjectSection from "@/components/ProjectSection";
import Navigation from "@/components/Navigation";
import { about, connect, projects } from "@/utils/data";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<"aboutMe" | "projects" | "connect">("aboutMe");

  const aboutMeInView = useInView(aboutMeRef);
  const projectInView = useInView(projectRef);
  const connectInView = useInView(connectRef);

  useEffect(() => {
    if (aboutMeInView) {
      setActiveSection("aboutMe");
    } else if (projectInView) {
      setActiveSection("projects");
    } else if (connectInView) {
      setActiveSection("connect");
    }
  }, [aboutMeInView, projectInView, connectInView]);

  const handleScrollToSection = (section: "aboutMe" | "projects" | "connect") => {
    const ref = section === "aboutMe" ? aboutMeRef : section === "projects" ? projectRef : connectRef;
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY + 1;
  
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navigation onScrollToSection={handleScrollToSection} activeSection={activeSection} />
      <div className="max-w-4xl mx-auto ">
        <div
          ref={aboutMeRef}
          className={`aboutMe min-h-screen ${aboutMeInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        >
          <AboutMe {...about} />
        </div>
        <div
          ref={projectRef}
          className={`project min-h-screen ${projectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        >
          <ProjectSection projects={projects} />
        </div>
        <div
          ref={connectRef}
          className={`connect ${connectInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        >
          <Connect {...connect} />
        </div>
      </div>
    </>
  );
}
