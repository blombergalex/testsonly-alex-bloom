import { screen, render, fireEvent } from "@testing-library/react";
import Navigation from ".";

describe("Tests for navigation component", () => {
  const mockOnScrollToSection = jest.fn();

  beforeEach(() => {
    mockOnScrollToSection.mockClear();
  });

  it("renders correctly on mobile and toggles visibility", () => {
    render(
      <Navigation
        onScrollToSection={mockOnScrollToSection}
        activeSection="aboutMe"
      />
    );

    const hamburgerIcon = screen.getByTestId("open-menu-btn");
    expect(hamburgerIcon).toBeInTheDocument();

    expect(screen.queryByTestId("mobile-nav-list")).not.toBeInTheDocument();

    fireEvent.click(hamburgerIcon);

    const mobileNavList = screen.getByTestId("mobile-nav-list");
    expect(mobileNavList).toBeInTheDocument();

    const closeIcon = screen.getByTestId("close-menu-btn");
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(closeIcon);

    expect(screen.queryByTestId("mobile-nav-list")).not.toBeInTheDocument();
  });

  it("calls correct function on mobile navigation item clicks", () => {
    render(
      <Navigation
        onScrollToSection={mockOnScrollToSection}
        activeSection="aboutMe"
      />
    );

    const hamburgerIcon = screen.getByTestId("open-menu-btn");

    const menuItems = [
      { testId: "mobile-aboutMe", arg: "aboutMe" },
      { testId: "mobile-projects", arg: "projects" },
      { testId: "mobile-connect", arg: "connect" },
    ];

    menuItems.forEach(({ testId, arg }) => {
      fireEvent.click(hamburgerIcon)
      const menuItem = screen.getByTestId(testId);
      fireEvent.click(menuItem);
      expect(mockOnScrollToSection).toHaveBeenCalledWith(arg);
    });
  });

  it("renders the desktop navigation correctly", () => {
    render(
      <Navigation
        onScrollToSection={mockOnScrollToSection}
        activeSection="aboutMe"
      />
    );

    const desktopNavigation = screen.getByTestId("desktop-nav");
    expect(desktopNavigation).toBeInTheDocument();
  });

  it("calls correct function on desktop navigation item clicks", () => {
    render(<Navigation onScrollToSection={mockOnScrollToSection} activeSection="aboutMe" />);

    const menuItems = [
      { testId: "desktop-aboutMe", arg: 'aboutMe' },
      { testId: "desktop-projects", arg: 'projects' },
      { testId: "desktop-connect", arg: 'connect' }
    ];

    menuItems.forEach(({ testId, arg }) => {
      const menuItem = screen.getByTestId(testId);
      fireEvent.click(menuItem);
      expect(mockOnScrollToSection).toHaveBeenCalledWith(arg);
    });
  });
});
