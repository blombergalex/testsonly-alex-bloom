import { screen, render } from "@testing-library/react";
import { AboutMockData } from "@/utils/mockData";
import AboutMe from ".";

describe("Checks that about component renders correctly", () => {
  it("Checks component renders", () => {
    render(<AboutMe {...AboutMockData} />);
    const aboutMe = screen.getByTestId("about-me-section");
    expect(aboutMe).toBeInTheDocument();
  });

  it("Checks for About Me section title", () => {
    render(<AboutMe {...AboutMockData} />);
    const greeting = screen.getByRole("heading", {
      level: 2,
      name: "About Me",
    });
    expect(greeting).toBeInTheDocument();
  });

  it("Checks for correct name", () => {
    render(<AboutMe {...AboutMockData} />);
    const name = screen.getByRole("heading", {
      level: 3,
      name: "I'm Alexandra,",
    });
    expect(name).toBeInTheDocument();
  });

  it("Checks for introduction", () => {
    render(<AboutMe {...AboutMockData} />);
    const startText = screen.getByTestId("start");
    expect(startText).toBeInTheDocument();
    expect(startText).toHaveTextContent(AboutMockData.start);
  });

  it("Checks for experience text", () => {
    render(<AboutMe {...AboutMockData} />);
    const experienceText = screen.getByTestId("experience");
    expect(experienceText).toBeInTheDocument();
    expect(experienceText).toHaveTextContent(AboutMockData.experience);
  });

  it("Checks for text about next step", () => {
    render(<AboutMe {...AboutMockData} />);
    const nextStepText = screen.getByTestId("next-step");
    expect(nextStepText).toBeInTheDocument();
    expect(nextStepText).toHaveTextContent(AboutMockData.nextStep);
  });

  it("Checks for description of the site's purpose", () => {
    render(<AboutMe {...AboutMockData} />);
    const purposeText = screen.getByTestId("purpose");
    expect(purposeText).toBeInTheDocument();
    expect(purposeText).toHaveTextContent(AboutMockData.purpose);
  });
});
