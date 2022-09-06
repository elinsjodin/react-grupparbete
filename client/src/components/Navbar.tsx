import { Link } from "react-router-dom";
import { NavLinksContainer, NavLogo } from "./styledComponents/Containers";
import { NavWrapper } from "./styledComponents/Wrappers";

export const Navbar = () => {
  return (
    <div>
      <NavWrapper>
        <NavLogo>SORKINS</NavLogo>
        <NavLinksContainer id="nav-links-container">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link className="bookings-link" to="/bookings">
            Booking
          </Link>
          <Link className="contact-link" to="/contact">
            Contact
          </Link>
          <button>0</button>
        </NavLinksContainer>
      </NavWrapper>
    </div>
  );
};
