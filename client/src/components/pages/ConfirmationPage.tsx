import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";
import { ConfirmationWrapper } from "../styledComponents/ConfirmStyling";

interface IBackendData {
  bookings: string[];
}

export const ConfirmationPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <>
      {loading ? <Loader loading={loading} /> : null}
      <ConfirmationWrapper>
        <h1>Thank you for your booking!</h1>
        <h2>Check your Email for Confirmation</h2>
        <p>You can also remove your booking from it!</p>
        <Link to={"/"}>
          <button>Back to Home </button>
        </Link>
      </ConfirmationWrapper>
    </>
  );
};
