import { screen, render, fireEvent } from "@testing-library/react";
import ProjectSection from ".";
import { mockProjects } from "@/utils/mockData";

describe("Checks that the project section renders and work as expected", () => {
  it("Checks for Project section title", () => {
    render(<ProjectSection projects={mockProjects} />);
    const sectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "My Projects",
    });
    expect(sectionTitle).toBeInTheDocument();
  });

  it("Checks that favourites can be saved to and removed from list", () => {
    render(<ProjectSection projects={mockProjects} />);
    const favouriteList = screen.queryByTestId("favourite-list");
    expect(favouriteList).not.toBeInTheDocument();

    const favouriteButton = screen.getAllByTestId("favourite-btn");
    fireEvent.click(favouriteButton[1]);
    fireEvent.click(favouriteButton[3]);

    const updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent("Project 2");
    expect(updatedFavouriteList).toHaveTextContent("Project 4");

    fireEvent.click(favouriteButton[1]);
    const editedFavouriteList = screen.getByTestId("favourite-list");
    expect(editedFavouriteList).toHaveTextContent("Project 4");
    expect(editedFavouriteList).not.toHaveTextContent("Project 2");
  });

  it("Checks that favourited items remain in list as show all is activated and deactivated", () => {
    render(<ProjectSection projects={mockProjects} />);

    const favouriteButton = screen.getAllByTestId("favourite-btn");
    const favouriteList = screen.queryByTestId("favourite-list");
    fireEvent.click(favouriteButton[1]);

    let updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent("Project 2");

    const showAllButton = screen.getByTestId("show-all-btn");
    fireEvent.click(showAllButton);
    updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent("Project 2");

    const allFavouriteButtons = screen.queryAllByTestId("favourite-btn");
    fireEvent.click(allFavouriteButtons[5]);
    let thirdFavouriteList = screen.getByTestId("favourite-list");
    expect(thirdFavouriteList).toHaveTextContent("Project 2");
    expect(thirdFavouriteList).toHaveTextContent("Project 6");

    fireEvent.click(showAllButton);
    expect(thirdFavouriteList).toHaveTextContent("Project 2");
    expect(thirdFavouriteList).toHaveTextContent("Project 6");

    fireEvent.click(favouriteButton[2]);
    thirdFavouriteList = screen.getByTestId("favourite-list");
    expect(thirdFavouriteList).toHaveTextContent("Project 6");
  });

  it("Checks second scenario of favouriting/unfavouriting items and show/hide all projects", () => {
    render(<ProjectSection projects={mockProjects} />);

    const favouriteButtons = screen.getAllByTestId("favourite-btn");
    fireEvent.click(favouriteButtons[0]);
    const showAllButton = screen.getByTestId("show-all-btn");
    fireEvent.click(showAllButton);
    const allFavouriteButtons = screen.getAllByTestId("favourite-btn");

    fireEvent.click(allFavouriteButtons[4]);
    fireEvent.click(allFavouriteButtons[6]);

    let updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent("Project 1");
    expect(updatedFavouriteList).toHaveTextContent("Project 5");
    expect(updatedFavouriteList).toHaveTextContent("Project 7");

    fireEvent.click(showAllButton);
    fireEvent.click(allFavouriteButtons[1]);
    updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent("Project 1");
    expect(updatedFavouriteList).toHaveTextContent("Project 2");
    expect(updatedFavouriteList).toHaveTextContent("Project 5");
    expect(updatedFavouriteList).toHaveTextContent("Project 7");

    fireEvent.click(showAllButton);
    const updatedFavouriteButtons = screen.getAllByTestId("favourite-btn");
    fireEvent.click(updatedFavouriteButtons[0]);
    fireEvent.click(updatedFavouriteButtons[1]);
    fireEvent.click(updatedFavouriteButtons[4]);
    fireEvent.click(updatedFavouriteButtons[6]);

    const finalFavouriteList = screen.queryByTestId("favourite-list");
    expect(finalFavouriteList).not.toBeInTheDocument();
  });
});
