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

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: string[];
}

export const BookingPage = () => {
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  useEffect(() => {
    fetch("/")
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
