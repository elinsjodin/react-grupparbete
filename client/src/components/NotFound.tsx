import { Link } from "react-router-dom";
import { FormButton } from "./styledComponents/Buttons";
import { CancelBookingWrapper } from "./styledComponents/CancelBookingStyling";

export const NotFound = () => {
  return (
    <>
      <CancelBookingWrapper>
        <h1>Woops, Something went wrong!</h1>
        <p>
          <Link to={"/"}>
            <FormButton>To Home</FormButton>
          </Link>
        </p>
      </CancelBookingWrapper>
    </>
  );
};
