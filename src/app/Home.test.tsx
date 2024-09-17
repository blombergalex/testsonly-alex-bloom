import AboutMe from "@/components/About"
import Connect from "@/components/Connect"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import ProjectSection from "@/components/ProjectSection"
import { AboutMeType, ConnectType, ProjectType } from "@/utils/types"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { useInView } from "framer-motion"
import { AboutMockData, ConnectMockData, mockProjects } from "@/utils/mockData"


jest.mock("framer-motion", () => ({
  useInView: jest.fn(),
}));

const ProjectsMockData: ProjectType[] = mockProjects;

describe("Navigation functionality tests", () => {
  const mockOnScrollToSection = jest.fn();
  beforeEach(() => {
    (useInView as jest.Mock).mockReset();
  });
  
  it("highlights the correct navigation item based on the section in view", async () => {
      // Mock the useInView hook to simulate different sections being in view
      (useInView as jest.Mock).mockImplementation((ref) => {
        // Simulate different sections being in view based on the ref
        if (ref.current?.classList.contains("aboutMe")) return { inView: true };
        if (ref.current?.classList.contains("project")) return { inView: false };
        if (ref.current?.classList.contains("connect")) return { inView: false };
        return { inView: false };
      });

    render(
      <body className="flex flex-col w-full min-h-screen bg-black">
      <Header />
      <Navigation onScrollToSection={mockOnScrollToSection} activeSection="aboutMe" />
      <AboutMe {...AboutMockData}/>
      <ProjectSection projects={ProjectsMockData}/>
      <Connect  {...ConnectMockData}/>
      <Footer />
      </body>
    )

    expect(screen.getByTestId("mobile-aboutMe")).toHaveClass("underline");
    expect(screen.getByTestId("mobile-projects")).not.toHaveClass("underline");
    expect(screen.getByTestId("mobile-connect")).not.toHaveClass("underline");

    // Simulate scrolling to "Projects" section
    // (useInView as jest.Mock).mockImplementation((ref) => {
    //   if (ref === aboutMeRef.current) return { inView: false };
    //   if (ref === projectRef.current) return { inView: true };
    //   if (ref === connectRef.current) return { inView: false };
    //   return { inView: false };
    // });

    // // Wait for state update
    // await waitFor(() => {
    //   expect(screen.getByTestId("mobile-aboutMe")).not.toHaveClass("underline");
    //   expect(screen.getByTestId("mobile-projects")).toHaveClass("underline");
    //   expect(screen.getByTestId("mobile-connect")).not.toHaveClass("underline");
    // });

    // // Simulate scrolling to "Connect" section
    // (useInView as jest.Mock).mockImplementation((ref) => {
    //   if (ref === aboutMeRef.current) return { inView: false };
    //   if (ref === projectRef.current) return { inView: false };
    //   if (ref === connectRef.current) return { inView: true };
    //   return { inView: false };
    // });

    // // Wait for state update
    // await waitFor(() => {
    //   expect(screen.getByTestId("mobile-aboutMe")).not.toHaveClass("underline");
    //   expect(screen.getByTestId("mobile-projects")).not.toHaveClass("underline");
    //   expect(screen.getByTestId("mobile-connect")).toHaveClass("underline");

    // });
  });
})