import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { CheeseColor } from "../data/cheese-color.enum";

const CheeseFilter = () => {
  // Dropdown functionality
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [color, setColor] = useState(null);

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle caret color="primary">
          Select Color
        </DropdownToggle>
        <DropdownMenu>
          {Object.values(CheeseColor).map((color) => (
            <DropdownItem>{color}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CheeseFilter;
