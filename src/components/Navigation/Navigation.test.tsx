import { screen, render, fireEvent } from "@testing-library/react";
import MobileNavigation from ".";
import DesktopNavigation from ".";

describe("Tests that the navigation renders", () => {

  const mockMenuItemClick = jest.fn();

  it('renders correctly on mobile and toggles visibility', () => {
    const { rerender } = render(<MobileNavigation isOpen={false}  onMenuItemClick={mockMenuItemClick} />);
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeInTheDocument();

    const mobileNavList = screen.getByTestId('mobile-nav-list');
    expect(mobileNavList).toHaveClass('hidden');

    fireEvent.click(hamburgerIcon);

    rerender(<MobileNavigation isOpen={true} />);
    expect(screen.getByTestId('mobile-nav-list')).not.toHaveClass('hidden'); 
  });

  it('Checks that mobile navigation item clicks calls correct function with expected argument', () => {
    const mockHandleMenuClick = jest.fn();

    render(<MobileNavigation isOpen={true} onMenuItemClick={mockHandleMenuClick} />);

    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    fireEvent.click(hamburgerIcon);

    const menuItems = [
      { text: 'About Me', arg: 'about-me' },
      { text: 'Projects', arg: 'projects' },
      { text: 'Connect', arg: 'connect' }
    ];

    menuItems.forEach(({ text, arg }) => {
      const menuItem = screen.getByText(text);

      fireEvent.click(menuItem);

      expect(mockHandleMenuClick).toHaveBeenCalledWith(arg);
    });
  });

  // desktop navigation 
  it("Checks that navigation component is rendered correctly on desktop", () => {
    render(<DesktopNavigation />); 
    const desktopNavigation = screen.getByTestId("desktop-navigation");
    expect(desktopNavigation).toBeInTheDocument;
  });

  it("Checks desktop navigation item clicks calls correct function with expected argument", () => {
    const mockDesktopMenuItemClick = jest.fn();

    render(<DesktopNavigation onMenuItemClick={mockDesktopMenuItemClick} />);

    const menuItems = [
      { text: 'About Me', arg: 'about-me' },
      { text: 'Projects', arg: 'projects' },
      { text: 'Connect', arg: 'connect' }
    ];

    menuItems.forEach(({ text, arg }) => {
      const menuItem = screen.getByText(text);

      fireEvent.click(menuItem);

      expect(mockDesktopMenuItemClick).toHaveBeenCalledWith(arg);
    });
  });
});