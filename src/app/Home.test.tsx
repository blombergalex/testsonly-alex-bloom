import AboutMe from "@/components/About"
import Connect from "@/components/Connect"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import ProjectSection from "@/components/ProjectSection"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { useInView } from "framer-motion"
import { AboutMockData, ConnectMockData, mockProjects } from "@/utils/mockData"


// jest.mock("framer-motion", () => ({
//   useInView: jest.fn(),
// }));

describe("Navigation functionality tests", () => {
  const mockOnScrollToSection = jest.fn();

//   beforeEach(() => {
//     (useInView as jest.Mock).mockReset();
//   });
  
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

    expect(screen.getByTestId("desktop-aboutMe").classList.contains("border-b-2")).toBe(true); // aboutMe starts as highlighted
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