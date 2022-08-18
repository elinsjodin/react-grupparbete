//imported styles
import {
  NavWrapper,
  BookingHeroWrapper,
  AddBookingWrapper,
} from "../styledComponents/Wrappers";

import {
  AddBookingCalanderContainer,
  AddBookingChooseTimeContainer,
  AddBookingFormContainer,
  AddBookingFormInputFieldsContainer,
  AddBookingFormButtonFieldsContainer,
  AddBookingMonthContainer,
  BookingHeroContentContainer,
  BookingHeroTitleContainer,
} from "../styledComponents/Containers";
import { useEffect, useState } from "react";

export const BookingPage = () => {
  const [backendData, setBackendData] = useState({ bookings: [] });

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}

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
