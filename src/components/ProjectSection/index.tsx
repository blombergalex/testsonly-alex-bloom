"use client";

import { useState } from "react";
import ProjectList from "../ProjectList";
import FavouriteList from "../FavouriteList";
import { ProjectType } from "@/utils/types";

type ProjectSectionProps = {
  projects: ProjectType[];
};

const ProjectSection = ({ projects }: ProjectSectionProps) => {
  const [favouriteProjects, setFavouriteProjects] = useState<string[]>([]);

  const handleFavouriteToggle = (id: string) => {
    setFavouriteProjects((prevFavourites) =>
      prevFavourites.includes(id)
        ? prevFavourites.filter((favId) => favId !== id)
        : [...prevFavourites, id]
    );
  };

  return (
    <section
      datatest-id="project-section"
      className="flex flex-col justify-center md:p-14"
    >
      <h2 className="text-gray-200 bg-black text-center py-6 font-SansNarrow font-semi-bold text-lg md:text-2xl sticky top-[0] z-10 md:py-12 md:top-[61px]">
        My Projects
      </h2>
      <ProjectList
        projectItems={projects}
        onFavouriteToggle={handleFavouriteToggle}
        favouriteProjects={favouriteProjects}
      />
      <FavouriteList favouriteIds={favouriteProjects} projects={projects} />
    </section>
  );
};

export default ProjectSection;
