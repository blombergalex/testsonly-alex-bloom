import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavigationProps = {
  onScrollToSection: (section: "aboutMe" | "projects" | "connect") => void;
};

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-screen bg-black text-gray-200 z-50">
      <div className="flex p-2 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl absolute top-5 right-5 "
        >
          <Bars3Icon className="h-6 w-6 text-gray-200" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center gap-10 text-xl font-SansNarrow">
          <button
            className={`absolute top-5 right-5 text-3xl transition-transform duration-500 ${menuOpen ? "animate-spin-right" : ""}`}
            onClick={toggleMenu}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <ul data-testid="mobile-nav-list" className="space-y-5">
            <li
              onClick={() => {
                onScrollToSection("aboutMe");
                toggleMenu();
              }}
            >
              About Me
            </li>
            <li
              onClick={() => {
                onScrollToSection("projects");
                toggleMenu();
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                onScrollToSection("connect");
                toggleMenu();
              }}
            >
              Connect
            </li>
          </ul>
        </div>
      )}
      
      <ul className="hidden md:flex pl-10 justify-start gap-10 py-4 px-2 border-b border-b-gray-300">
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
