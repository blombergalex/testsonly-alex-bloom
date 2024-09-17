import Home from "./page"
import AboutMe from "@/components/About"
import Connect from "@/components/Connect"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import ProjectSection from "@/components/ProjectSection"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { AboutMockData, ConnectMockData, mockProjects } from "@/utils/mockData"


jest.mock("framer-motion", () => ({
  useInView: jest.fn(),
}));

describe("Navigation functionality tests", () => {
  const mockOnScrollToSection = jest.fn();

  let useInViewMock: jest.Mock;

  beforeEach(() => {
    useInViewMock = require("framer-motion").useInView;
    useInViewMock.mockReset();
  });

  it("Checks correct section is visible based on the scroll position", async () => {
    useInViewMock.mockImplementation((ref) => {
      if (ref.current?.classList.contains("aboutMe")) return true;
      if (ref.current?.classList.contains("projects")) return false;
      return false;
    });

    render(<Home />);

    const aboutMeSection = screen.getByTestId("aboutMe");
    const projectSection = screen.getByTestId("projects");

    expect(aboutMeSection.getAttribute("data-active")).toBe("false");

    fireEvent.scroll(window, {
      target: {
        scrollY: aboutMeSection.offsetTop - 100,
      },
    });

    const updatedAboutMeSection = screen.getByTestId("aboutMe");
    const updatedProjectSection = screen.getByTestId("projects");

    await waitFor(() => {
      expect(updatedAboutMeSection.getAttribute("data-active")).toBe("true");  // test error still receive false
      expect(updatedProjectSection.getAttribute("data-active")).toBe("false");
    });


  });

  ///////////
  ///////////
  
  it("highlights About Me navigation item when About Me section is in view", async () => {
    render(
      <body className="flex flex-col w-full min-h-screen bg-black">
        <Header />
        <Navigation onScrollToSection={mockOnScrollToSection} activeSection="aboutMe" />
        <AboutMe {...AboutMockData}/>
        <ProjectSection projects={mockProjects}/>
        <Connect  {...ConnectMockData}/>
        <Footer />
      </body>
    )

    expect(screen.getByTestId("desktop-aboutMe").classList.contains("border-b-2")).toBe(true);
    expect(screen.getByTestId("desktop-projects").classList.contains("border-b-2")).toBe(false);
    expect(screen.getByTestId("desktop-connect").classList.contains("border-b-2")).toBe(false);

  });

  it("highlights Projects navigation item when Project section is in view", async () => {
    render(
      <body className="flex flex-col w-full min-h-screen bg-black">
        <Header />
        <Navigation onScrollToSection={mockOnScrollToSection} activeSection="projects" />
        <AboutMe {...AboutMockData}/>
        <ProjectSection projects={mockProjects}/>
        <Connect  {...ConnectMockData}/>
        <Footer />
      </body>
    )

    expect(screen.getByTestId("desktop-aboutMe").classList.contains("border-b-2")).toBe(false);
    expect(screen.getByTestId("desktop-projects").classList.contains("border-b-2")).toBe(true);
    expect(screen.getByTestId("desktop-connect").classList.contains("border-b-2")).toBe(false);
  });

  it("highlights Connect navigation item when Connect section is in view", async () => {
    render(
      <body className="flex flex-col w-full min-h-screen bg-black">
        <Header />
        <Navigation onScrollToSection={mockOnScrollToSection} activeSection="connect" />
        <AboutMe {...AboutMockData}/>
        <ProjectSection projects={mockProjects}/>
        <Connect  {...ConnectMockData}/>
        <Footer />
      </body>
    )

    expect(screen.getByTestId("desktop-aboutMe").classList.contains("border-b-2")).toBe(false);
    expect(screen.getByTestId("desktop-projects").classList.contains("border-b-2")).toBe(false);
    expect(screen.getByTestId("desktop-connect").classList.contains("border-b-2")).toBe(true);
  });
});