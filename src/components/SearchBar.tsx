import { Button, Input } from "reactstrap";

const SearchBar = () => {
  return (
    <div className="search">
      <Input />
      <Button color="primary" size="md">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
