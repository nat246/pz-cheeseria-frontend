import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const HeaderNavbar = () => {
  return (
    <div className="">
      <Navbar className="navbar flex" expand="md" light>
        <NavbarBrand className="" tag={Link} to="/">PZ Cheeseria</NavbarBrand>

        <NavItem className="list-none">
          <Link to={"/browse"}>Browse</Link>
        </NavItem>
        
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
