import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="max-w-md w-full lg:my-0 my-5">
      <form className="join w-full">
        <input
          className="input input-bordered input-primary join-item max-w-md w-full"
          placeholder="Search Your Tasks"
        />
        <button type="submit" className="btn join-item btn-primary">
          <FaSearch />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
