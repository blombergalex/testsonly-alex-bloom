import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from ".";

describe("Check for search bar", () => {

  const mockFunction = () => {};

  it("Checks that search bar renders", () => {
    const searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  })

  
  it("Checks that user search is saved in state", () => {
    render(<SearchBar updateSearchFunction={mockFunction}/>) 
    const mockSearch = "Tailwind" 
    let userInput = screen.getByLabelText("Search for project by technology")
    expect ((userInput as HTMLInputElement).value).toBe('')
    fireEvent.change(userInput, {target:{value: mockSearch}})
    userInput = screen.getByLabelText("Search for project by technology")
    expect ((userInput as HTMLInputElement).value).toBe(mockSearch)
  })
})