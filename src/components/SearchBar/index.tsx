import { HTMLInputTypeAttribute, SetStateAction, useState } from "react";

type SearchBarProps = {
  updateSearchFunction: (searchTerm: string) => void;
};

const SearchBar = ({ updateSearchFunction }: SearchBarProps) => {
  const [search, setSearch] = useState<HTMLInputTypeAttribute>("");

  const handleChange = (e: { target: { value: SetStateAction<HTMLInputTypeAttribute> } }) => {
    setSearch(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Prevent the form from submitting
    if (search !== "") {
      updateSearchFunction(search);
    }
  };

  return (
    <form data-testid="search-bar" className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search for project by technology
      </label>
      <div className="relative flex items-center">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute left-3 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          type="search"
          id="default-search"
          value={search}
          onChange={handleChange}
          placeholder="TypeScript, CSS, Jest"
          className="block w-full p-4 pl-10 pr-28 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-600 text-white focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-600"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
