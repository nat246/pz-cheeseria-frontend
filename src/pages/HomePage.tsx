import SearchBar from "../components/SearchBar";
import { SearchProps } from "../data/search-prop.interface";

const HomePage = ({setSearchQuery}: SearchProps) => {
  return (
    <div>
      <h2 className="text-5xl">Discover your Cheese Nirvana</h2>

      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default HomePage;
