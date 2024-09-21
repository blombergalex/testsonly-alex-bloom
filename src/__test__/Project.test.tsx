import { screen, render, fireEvent } from "@testing-library/react";
import Project from ".";

const mockOnFavouriteToggle = () => {}
const mockData = {
  id: "1",
  title: "Project title",
  date: "month year",
  imgSrc: "/images/mockimage.jpg",
  alt: "Mockalt text for image",
  description: "Here is a mockdescription of a project",
  githubLink: "https://github.com/blombergalex/project",
  websiteLink: "https://vercel.project.app",
  favourite: false,
};

describe("Project component has correct content and functionality", () => {
  it("Checks that the project component renders correctly", () => {
    render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />);
    const project = screen.getByTestId("project");
    expect(project).toBeInTheDocument();
  });

  it("Checks the project title renders correctly", () => {
    render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />);
    
    const projectTitle = screen.getByRole("heading", {
      level: 3,
      name: mockData.title,
    });

    expect(projectTitle).toBeInTheDocument();
  });

  it("Checks that project image with correct URL", () => {
    render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />);

    const projectImage = screen.getByRole("img", { name: mockData.alt });
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent(mockData.imgSrc))
    );
  });

  it("Checks the project description is rendered correctly", () => {
    render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />);
    const projectDescription = screen.getByTestId("description");
    expect(projectDescription).toBeInTheDocument();
  });

  it("Checks that project links have correct URL and functionality", () => {
    render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />);
    const githubLink = screen.getByTestId("github-link");
    const websiteLink = screen.getByTestId("website-link");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", mockData.githubLink);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", mockData.websiteLink);
    expect(websiteLink).toHaveAttribute("target", "_blank");
    expect(websiteLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("Checks that favourite is saved in state on button click", () => {
    const {rerender} = render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />);
    const favouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton).toBeInTheDocument();
    expect(favouriteButton.classList.contains("text-gray-300")).toBe(true);
    
    fireEvent.click(favouriteButton);
    rerender(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={true} />);
    const updatedFavouriteButton = screen.getByTestId("favourite-btn");
    expect(updatedFavouriteButton.classList.contains("text-amber-500")).toBe(true);
  });

  it("Checks that favourite state is removed on second button click", () => {
    const { rerender } = render(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={true} />);
    const favouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton).toBeInTheDocument();

    expect(favouriteButton.classList.contains("text-amber-500")).toBe(true);

    fireEvent.click(favouriteButton);
    rerender(<Project {...mockData} onFavouriteToggle={mockOnFavouriteToggle} isFavourite={false} />)
    const updatedFavouriteButton = screen.getByTestId("favourite-btn");
    expect(updatedFavouriteButton.classList.contains("text-gray-300")).toBe(true);
  });
});
