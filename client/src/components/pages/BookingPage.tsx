//imported styles
import {
  NavWrapper,
  BookingHeroWrapper,
  AddBookingWrapper,
} from "../../styles/Wrappers";

import {
  AddBookingCalanderContainer,
  AddBookingChooseTimeContainer,
  AddBookingFormContainer,
  AddBookingFormInputFieldsContainer,
  AddBookingFormButtonFieldsContainer,
  AddBookingMonthContainer,
  BookingHeroContentContainer,
  BookingHeroTitleContainer,
} from "../../styles/Containers";
import { useEffect, useState } from "react";

// interface IBackendData {
//   bookings: string[];
// }

export const BookingPage = () => {
  const [backendData, setBackendData] = useState({ bookings: [] });

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavWrapper></NavWrapper>
      <BookingHeroWrapper>
        <BookingHeroTitleContainer></BookingHeroTitleContainer>
        <BookingHeroContentContainer></BookingHeroContentContainer>
      </BookingHeroWrapper>
      <AddBookingWrapper>
        <AddBookingMonthContainer></AddBookingMonthContainer>
        <AddBookingCalanderContainer></AddBookingCalanderContainer>
        <AddBookingChooseTimeContainer></AddBookingChooseTimeContainer>
        <AddBookingFormContainer>
          <AddBookingFormInputFieldsContainer></AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer></AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </>
  );
};
