import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, InputGroup } from "reactstrap";
import { SearchProps } from "../data/search-prop.interface";

const SearchBar = ({ setSearchQuery }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // const handleButtonClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(inputValue);
  // };

  return (
    <div className="search w-full">
      <InputGroup>
        <Input value={inputValue} onChange={handleInputChange} />
        <Button
          color="primary"
          size="md"
          onClick={() => {
            setSearchQuery(inputValue);

            navigate("/browse");
          }}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
