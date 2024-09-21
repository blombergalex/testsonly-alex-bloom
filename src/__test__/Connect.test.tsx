import { screen, render } from "@testing-library/react";
import { ConnectMockData } from "@/utils/mockData";
import Connect from ".";

describe("Checks that Connect component renders correctly", () => {
  it("Checks component renders", () => {
    render(<Connect {...ConnectMockData} />);
    const aboutMe = screen.getByTestId("connect-section");
    expect(aboutMe).toBeInTheDocument();
  });

  it("Checks for Connect section title", () => {
    render(<Connect {...ConnectMockData} />);
    const connectSectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "Let's Connect",
    });
    expect(connectSectionTitle).toBeInTheDocument();
  });

  it("Checks for connect text", () => {
    render(<Connect {...ConnectMockData} />);
    const startText = screen.getByTestId("connect-text");
    expect(startText).toBeInTheDocument();
    expect(startText).toHaveTextContent(ConnectMockData.connectText);
  });

  it("Checks for mail address", () => {
    render(<Connect {...ConnectMockData} />);
    const mailLink = screen.getByRole("link", {
      name: "blombergalexandras@gmail.com",
    });
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute(
      "href",
      "mailto:blombergalexandras@gmail.com"
    );
  });

  it("Checks for LinkedIn link", () => {
    render(<Connect {...ConnectMockData} />);
    const socialLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/alexandra-blomberg-7231a616a/"
    );
  });

  it("Checks for image", () => {
    render(<Connect {...ConnectMockData} />);
    const profileImage = screen.getByRole("img", { name: ConnectMockData.alt });
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent(ConnectMockData.imgSrc))
    );
  });
});
