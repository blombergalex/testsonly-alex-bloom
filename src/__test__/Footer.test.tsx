import { screen, render } from "@testing-library/react";
import Footer from ".";

describe("Tests for footer component", () => {
  it("Footer component renders correctly", () => {
    render(<Footer />);
    const footerContainer = screen.getByTestId("footer");
    expect(footerContainer).toBeInTheDocument();
  });

  it("Displays the correct heading", () => {
    render(<Footer />);
    const contactTitle = screen.getByRole("heading", {
      level: 3,
      name: "Say Hello",
    });
    expect(contactTitle).toBeInTheDocument();
  });

  it("Contains mailto link with correct address", () => {
    render(<Footer />);
    const mailLink = screen.getByRole("link", {
      name: "blombergalexandras@gmail.com",
    });
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute(
      "href",
      "mailto:blombergalexandras@gmail.com"
    );
  });

  it("Contains LinkedIn link with correct URL", () => {
    render(<Footer />);
    const socialLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/alexandra-blomberg-7231a616a"
    );
  });

  it("Displays correct info at the bottom", () => {
    render(<Footer />);
    const bottomText = screen.getByTestId("bottom-text");
    expect(bottomText).toHaveTextContent(
      `Alexandra Blomberg © ${new Date().getFullYear()} | Source code`
    );
  });

  it("Contains Github link with correct URL", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: "Source code" });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/blombergalex/alex-bloom"
    );
  });
});
