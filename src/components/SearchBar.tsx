import { Button, Input, InputGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <div className="search">
      <InputGroup>
        <Input />
        <Button color="primary" size="md">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
