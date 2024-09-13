import React from "react";

type NavigationProps = {
  onScrollToSection: (section: "aboutMe" | "projects" | "connect") => void;
};

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection }) => {
  return (
    <nav className="flex justify-center font-SansNarrow sticky top-0 w-full bg-black text-gray-200 z-50">
      <ul className="flex gap-10 py-4 px-2  border-b border-b-gray-300 border-solid">
        <li
          className="cursor-pointer text-lg hover:text-amber-500"
          onClick={() => onScrollToSection("aboutMe")}
        >
          About Me
        </li>
        <li
          className="cursor-pointer text-lg hover:text-amber-500"
          onClick={() => onScrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className="cursor-pointer text-lg hover:text-amber-500"
          onClick={() => onScrollToSection("connect")}
        >
          Connect
        </li>
      </ul>

    </nav>
  );
};

export default Navigation;
