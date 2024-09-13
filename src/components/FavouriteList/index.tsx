import { ProjectType } from "@/utils/types";
import { HeartIcon } from "@heroicons/react/20/solid";

type FavouriteListProps = {
  favouriteIds: string[];
  projects: ProjectType[];
};

const FavouriteList = ({ favouriteIds, projects }: FavouriteListProps) => {
  const favouriteProjects = projects.filter((project) =>
    favouriteIds.includes(project.id)
  );

  return favouriteProjects.length > 0 ? (
    <div data-testid="favourite-list" className="flex flex-col m-6">
      <h2 className="text-gray-200 text-center py-6 font-SansNarrow font-semi-bold text-lg md:text-2xl animate-fade-in">
        Your favourites
      </h2>
      <ul className="max-w-sm">
        {favouriteProjects.map((project) => (
          <li
            key={project.id}
            data-testid="favourite-project"
            className="flex text-gray-200 animate-fade-in"
          >
            <HeartIcon className={"w-6 h-6 text-amber-500 mr-1"} />
            <a
              data-testid="website-link"
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default FavouriteList;
