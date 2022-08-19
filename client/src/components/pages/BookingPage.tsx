//imported styles
import {
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
  AddBookingChooseAmountContainer,
  AddBookingChooseAmountHolder,
} from "../styledComponents/Containers";
import { useEffect, useState } from "react";
import { FormInput } from "../styledComponents/Inputs";
import { FormButton } from "../styledComponents/Buttons";

export const BookingPage = () => {
  //backendData is the data that is returned from the backend
  const [backendData, setBackendData] = useState({ bookings: [] });

  // fetch data from backend and set it to state
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      {/* typeof is used to check if the data is an array */}
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        //map through the data and return a list of bookings
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}

      <BookingHeroWrapper>
        <BookingHeroTitleContainer>
          <h1>Booking</h1>
        </BookingHeroTitleContainer>
        <BookingHeroContentContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, quisquam quisquam.
          </p>
        </BookingHeroContentContainer>
      </BookingHeroWrapper>
      <AddBookingWrapper>
        <AddBookingMonthContainer>July 2022</AddBookingMonthContainer>
        <AddBookingCalanderContainer>
          Placeholder for calander
        </AddBookingCalanderContainer>
        <AddBookingChooseTimeContainer>
          <AddBookingChooseAmountHolder>
            <h1>Choose a Time</h1>
            <div>
              <button>1</button>
              <p>4</p>
              <button>2</button>
            </div>
          </AddBookingChooseAmountHolder>
        </AddBookingChooseTimeContainer>
        <AddBookingChooseAmountContainer>
          Amount of people
        </AddBookingChooseAmountContainer>
        <AddBookingFormContainer>
          <AddBookingFormInputFieldsContainer>
            <p>Full Name</p>
            <FormInput placeholder="Lars larson" />
            <p>Email</p>
            <FormInput placeholder="lars@larson.com" />
            <p>Phone</p>
            <FormInput placeholder="1689490153" />
            <p>user request</p>
            <FormInput placeholder="vegan" />
          </AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            <FormButton>Book</FormButton>
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </>
  );
};
