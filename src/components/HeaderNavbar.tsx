import { Link } from "react-router-dom";
import { Navbar, NavItem } from "reactstrap";

const HeaderNavbar = () => {
  return (
    <Navbar className="navbar" color="light" expand="md" light>
      <NavItem>
        <Link to={"/"}>Home</Link>
      </NavItem>

      <NavItem>
        <Link to={"/browse"}>Browse</Link>
      </NavItem>
    </Navbar>
  );
};

export default HeaderNavbar;
