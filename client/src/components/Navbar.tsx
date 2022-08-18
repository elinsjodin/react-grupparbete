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
          <Link to="/booking">Booking</Link>
          <Link to="/about">About</Link>
        </NavLinksContainer>
      </NavWrapper>
    </div>
  );
};
