import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const CancelBooking = () => {
  const { id } = useParams<{ id: string }>();

  const handleCancelBooking = () => {
    axios
      .delete("http://localhost:3000/bookings/cancel/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <p>
        <Link to={"/booking-canceled"}>
          <button onClick={handleCancelBooking}>Confirm cancel booking.</button>
        </Link>
      </p>
    </>
  );
};
