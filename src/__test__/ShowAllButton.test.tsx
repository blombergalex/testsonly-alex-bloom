import { screen, render } from "@testing-library/react";
import ShowAllButton from ".";

describe("Check the showAll button", () => {

  const mockFunction = () => {};
  const mockShowAll = false;

  it("Checks that the button renders properly", () => {
    render(<ShowAllButton onShowAllToggle={mockFunction} showAll={mockShowAll} />);
    const showAllButton = screen.getByTestId("show-all-btn");
    expect(showAllButton).toHaveTextContent("Show all projects");
  });
});
