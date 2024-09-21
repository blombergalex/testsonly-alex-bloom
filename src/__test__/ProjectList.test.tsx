import { render, screen, fireEvent } from "@testing-library/react";
import ProjectList from ".";
import { ProjectType } from "@/utils/types";

const mockProjects: ProjectType[] = [
  {
    id: "1",
    title: "Project 1",
    date: "month year",
    imgSrc: "/images/project1.png",
    alt: "Snapshot of Project 1.",
    description: "Description of Project 1.",
    githubLink: "https://mock.github.com/project-1",
    websiteLink: "https://project-1.com",
    favourite: false,
  },
  {
    id: "2",
    title: "Project 2",
    date: "month year",
    imgSrc: "/images/project2.png",
    alt: "Snapshot of Project 2.",
    description: "Description of Project 2.",
    githubLink: "https://mock.github.com/project-2",
    websiteLink: "https://project-2.com",
    favourite: false,
  },
  {
    id: "3",
    title: "Project 3",
    date: "month year",
    imgSrc: "/images/project3.png",
    alt: "Snapshot of Project 3.",
    description: "Description of Project 3.",
    githubLink: "https://mock.github.com/project-3",
    websiteLink: "https://project-3.com",
    favourite: false,
  },
  {
    id: "4",
    title: "Project 4",
    date: "month year",
    imgSrc: "/images/project4.png",
    alt: "Snapshot of Project 4.",
    description: "Description of Project 4.",
    githubLink: "https://mock.github.com/project-4",
    websiteLink: "https://project-4.com",
    favourite: false,
  },
  {
    id: "5",
    title: "Project 5",
    date: "month year",
    imgSrc: "/images/project5.png",
    alt: "Snapshot of Project 5.",
    description: "Description of Project 5. ",
    githubLink: "https://mock.github.com/project-5",
    websiteLink: "https://project-5.com",
    favourite: false,
  },
  {
    id: "6",
    title: "Project 6",
    date: "month year",
    imgSrc: "/images/project6.png",
    alt: "Snapshot of Project 6.",
    description: "Description of Project 6.",
    githubLink: "https://mock.github.com/project-6",
    websiteLink: "https://project-6.com",
    favourite: false,
  },
  {
    id: "7",
    title: "Project 7",
    date: "month year",
    imgSrc: "/images/project7.png",
    alt: "Snapshot of Project 7.",
    description: "Description of Project 7",
    githubLink: "https://mock.github.com/project-7",
    websiteLink: "https://project-7.com",
    favourite: false,
  },
];

  const mockOnFavouriteToggle = () => {}

describe("The ProjectList is rendered correctly", () => {
  it("Checks that the projectlist-container is rendered", () => {
    render(<ProjectList onFavouriteToggle={mockOnFavouriteToggle} projectItems={mockProjects} favouriteProjects={[]} />);
    const projectList = screen.getByTestId("project-list");
    expect(projectList).toBeInTheDocument();
  });

  it("Checks that the first four projects are rendered", () => {
    render(<ProjectList onFavouriteToggle={mockOnFavouriteToggle} projectItems={mockProjects} favouriteProjects={[]} />);
    const visibleProjects = screen.queryAllByTestId("project");
    expect(visibleProjects.length).toBe(4);
  });

  it("Checks that the four visible projects have a specific title", () => {
    render(<ProjectList onFavouriteToggle={mockOnFavouriteToggle} projectItems={mockProjects} favouriteProjects={[]} />);

    const defaultProjects = screen.queryAllByTestId("project");

    expect(defaultProjects[0]).toHaveTextContent("Project 1"); 
    expect(defaultProjects[1]).toHaveTextContent("Project 2"); 
    expect(defaultProjects[2]).toHaveTextContent("Project 3"); 
    expect(defaultProjects[3]).toHaveTextContent("Project 4"); 
  });

  it("Checks for showAll-button", () => {
    render(<ProjectList onFavouriteToggle={mockOnFavouriteToggle} projectItems={mockProjects} favouriteProjects={[]} />);
    const showAllButton = screen.getByTestId("show-all-btn");
    expect(showAllButton).toBeInTheDocument();
  })

  it("Checks control of showAll state when the ShowAllButton is clicked", () => {
    render(<ProjectList onFavouriteToggle={mockOnFavouriteToggle} projectItems={mockProjects} favouriteProjects={[]} />);
    const visibleProjects = screen.getAllByTestId("project");
    expect(visibleProjects.length).toBe(4);

    const showAllButton = screen.getByTestId("show-all-btn");
    fireEvent.click(showAllButton);

    const allVisibleProjects = screen.queryAllByTestId("project");
    expect(allVisibleProjects.length).toBeGreaterThan(4);

    fireEvent.click(showAllButton);
    const visibleProjectsAfterReset = screen.getAllByTestId("project");
    expect(visibleProjectsAfterReset.length).toBe(4);
  });
});