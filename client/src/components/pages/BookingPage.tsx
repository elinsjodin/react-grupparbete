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

interface IBackendData {
  booking: string[];
}

export const BookingPage = () => {
  const [backendData, setBackendData] = useState({ bookings: [] });

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
    // .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}
      {/* {typeof backendData.data !== "undefined" ? ( <p>loading..</p> } : (backendData.guests.map((guest, i) => <p key={i}> {guest}</p>))*/}
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
