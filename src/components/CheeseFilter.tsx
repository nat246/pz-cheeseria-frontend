import { Dispatch, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { CheeseColor } from "../data/cheese-color.enum";
interface FilterProps {
  color: CheeseColor;
  setColor: Dispatch<React.SetStateAction<CheeseColor>>;
}

const CheeseFilter = ({ color, setColor }: FilterProps) => {
  // Dropdown functionality
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleColorSelect = (selectedColor: CheeseColor) => {
    setColor(selectedColor);
  };

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle caret color="primary">
          {color ?? "Select Color"}
        </DropdownToggle>
        <DropdownMenu>
          {Object.values(CheeseColor).map((color) => (
            <DropdownItem key={color} onClick={() => handleColorSelect(color)}>
              {color}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CheeseFilter;
