import { Link } from "react-router-dom";

export const BookingCanceled = () => {
  return (
    <>
      <p>
        We have now canceled your booking,{" "}
        <Link to={"/bookings"}>click here to get to create a new booking</Link>
      </p>{" "}
      or go to our <Link to={"/"}>Home Page</Link>
    </>
  );
};
