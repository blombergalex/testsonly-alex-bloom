import { screen, render } from "@testing-library/react";
import FavouriteList from ".";
import { ProjectType } from "@/utils/types";

const mockProjects: ProjectType[] = [
  {
    id: "1",
    title: "Project One",
    date: "month year",
    imgSrc: "/images/project1.jpg",
    alt: "Project One Image",
    description: "Description for project one.",
    githubLink: "https://github.com/blombergalex/project-one",
    websiteLink: "https://vercel.project-one.com",
    favourite: true
  },
  {
    id: "2",
    title: "Project Two",
    date: "month year",
    imgSrc: "/images/project2.jpg",
    alt: "Project Two Image",
    description: "Description for project two.",
    githubLink: "https://github.com/blombergalex/project-two",
    websiteLink: "https://vercel.project-two.com",
    favourite: false
  }
];

const mockFavouriteIds = ["1"];

describe("FavouriteList component renders as expected", () => {
  it("Checks that the list shows when expected", () => {
    render(<FavouriteList projects={mockProjects} favouriteIds={mockFavouriteIds}/>);
    const favouriteList = screen.queryByTestId("favourite-list");
    expect(favouriteList).toBeInTheDocument(); 
  });

  it("Checks that only favourite projects are listed", () => {
    render(<FavouriteList favouriteIds={mockFavouriteIds} projects={mockProjects} />);
    const favouriteProjectItems = screen.getAllByTestId("favourite-project");
    expect(favouriteProjectItems).toHaveLength(1); 
    expect(favouriteProjectItems[0]).toHaveTextContent("Project One");
  });

  it("Checks for FavouriteList title", () => {
    render(<FavouriteList projects={mockProjects} favouriteIds={mockFavouriteIds}/>);
    const sectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "Your favourites",
    });
    expect(sectionTitle).toBeInTheDocument();
  });

  it("Checks for correct URL in FavouriteList item", () => {
    render(<FavouriteList projects={mockProjects} favouriteIds={mockFavouriteIds}/>);
    const favouriteProjectItem = screen.getByTestId("favourite-project");

    const favouriteProjectLink = screen.getByTestId("website-link");
    
    expect(favouriteProjectLink).toHaveAttribute(
      "href",
      "https://vercel.project-one.com"  
    )
  })
});
