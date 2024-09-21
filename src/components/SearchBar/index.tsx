import { HTMLInputTypeAttribute, SetStateAction, useState } from "react";

type SearchBarProps = {
  updateSearchFunction: (searchTerm: string) => void;
};

const SearchBar = ({updateSearchFunction}: SearchBarProps) => {
  const [search, setSearch] = useState<HTMLInputTypeAttribute>('')

  const handleChange = (e: { target: { value: SetStateAction<HTMLInputTypeAttribute>; }; }) => {
    setSearch(e.target.value);
  } 

  const handleClick = () => {
    if(search !== '') {
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
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={search}
          onChange={handleChange}
          placeholder="TypeScript, CSS, Jest"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:amber-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
          required
        />
        <button
          type="submit"
          className="text-gray-900 absolute end-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
