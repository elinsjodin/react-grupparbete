import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FormButton } from "../styledComponents/Buttons";
import { CancelBookingWrapper } from "../styledComponents/CancelBookingStyling";

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
      <CancelBookingWrapper>
        <h1>Are you sure you want to cancel this booking?</h1>
        <p>
          <Link to={"/booking-canceled"}>
            <FormButton
              className="confirm-cancel-booking-btn"
              onClick={handleCancelBooking}
            >
              Cancel booking.
            </FormButton>
          </Link>
        </p>
      </CancelBookingWrapper>
    </>
  );
};
