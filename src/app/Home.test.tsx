import AboutMe from "@/components/About"
import Connect from "@/components/Connect"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProjectSection from "@/components/ProjectSection"
import { AboutMeType, ConnectType, ProjectType } from "@/utils/types"
import { render, screen, fireEvent } from "@testing-library/react"
import { mockProjects } from "@/components/ProjectSection/ProjectSection.test"


// integration test for navigation

describe("Navigation functionality tests", () => {

  const AboutMockData: AboutMeType = {
    start: "This is a mock description written for the purpose of testing",
    experience:
      "This is a mock description of my experience for the purpose of testing",
    nextStep: "This is a mock description about the next step in my career",
    purpose: "This is a mock description of the purpose of this site",
  };

  const ProjectsMockData: ProjectType[] = mockProjects;

  const ConnectMockData: ConnectType = {
    connectText: "This is a mocktext for the connect section",
    imgSrc: "/images/mock-profile.jpg",
    alt: "Mock alt text for testing purposes",
  };

  const mockIsVisible = true;
  
  it("Checks that click on each navigation item shows expected section", () => {
    render(
      <body className="flex flex-col w-full min-h-screen bg-black">
      <Header />
      <Navigation />
      <AboutMe {...AboutMockData} isVisible={mockIsVisible}/>
      <ProjectSection projects={ProjectsMockData}/>
      <Connect  {...ConnectMockData}/>
      <Footer />
      </body>
    )

    const aboutMe = screen.getByTestId("about-me-section");
    expect(aboutMe.classList.contains("hidden")).toBe(false); // expect about me to show on page load

    // click connect menu item

    // rerender about container
    expect(aboutMe.classList.contains("hidden")).toBe(true); // expect about me to be hidden when connect is clicked
// repeat more scenarios
  
  });
})