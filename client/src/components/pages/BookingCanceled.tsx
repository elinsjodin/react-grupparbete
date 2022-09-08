import { Link } from "react-router-dom";
import { CancelBookingWrapper } from "../styledComponents/CancelBookingStyling";

export const BookingCanceled = () => {
  return (
    <>
      <CancelBookingWrapper>
        <p>
          We have now canceled your booking,{" "}
          <Link to={"/bookings"}>
            click here to get to create a new booking
          </Link>
        </p>
        <p>
          or go to our <Link to={"/"}>Home Page</Link>
        </p>
      </CancelBookingWrapper>
    </>
  );
};
