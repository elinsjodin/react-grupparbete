import { Link } from "react-router-dom";
import { NavLinksContainer, NavLogo } from "./styledComponents/Containers";
import { NavWrapper } from "./styledComponents/Wrappers";

export const Navbar = () => {
  return (
    <div>
      <NavWrapper>
        <NavLogo>SORKINS</NavLogo>
        <NavLinksContainer>
          <Link to="/">Home</Link>
          <Link to="/bookings">Booking</Link>
          <Link to="/contact">Contact</Link>
          <button>0</button>
        </NavLinksContainer>
      </NavWrapper>
    </div>
  );
};
