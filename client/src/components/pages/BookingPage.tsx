//imported styles
import {
  BookingHeroWrapper,
  AddBookingWrapper,
} from "../styledComponents/Wrappers";

import Calendar from "react-calendar";

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
  AddBookingChooseTimeHolder,
} from "../styledComponents/Containers";
import { useEffect, useState } from "react";
import { FormInput } from "../styledComponents/Inputs";
import { FormButton } from "../styledComponents/Buttons";
import { IBooking } from "../../models/IBooking";

//INTERFACES

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: IBooking[];
}

//STATES

export const BookingPage = () => {
  //state for the count of people
  const [count, setCount] = useState(0);

  //state for the date
  const [calanderDate, setCalanderDate] = useState(new Date());

  //state for all info about guest
  const [guestInfoList, setGuestInfoList] = useState<[{}]>([{}]);

  //state for all info about booking
  const [bookingRequest, setBookingRequest] = useState<[{}]>([{}]);

  //state for the booking interface
  const [filledForm, setFilledForm] = useState<IBooking>({
    date: [],
    time: [],
    amount: [],
    guestInfo: [{ name: "", email: "", phone: "", message: "" }],
  });

  //state for the backend data
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  //FETCHES

  // fetch data from backend and set it to state
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  //FUNCTIONS in order you see them on screen

  const handleChosenDate = () => {
    setFilledForm({ ...filledForm, date: [calanderDate] });
  };

  //handles click for time
  const handleFirstTime = () => {
    setFilledForm({
      ...filledForm,
      time: ["18:00"],
    });
  };

  //handles click for time
  const handleSecondTime = () => {
    setFilledForm({
      ...filledForm,
      time: ["21:00"],
    });
  };

  //handles amount of guest increase
  const handleAmountIncrease = () => {
    setCount(count + 1);
    setFilledForm({
      ...filledForm,
      amount: [count],
    });
  };

  //handles amount of guest decrease
  const handleAmountDecrease = () => {
    setCount(count - 1);
    setFilledForm({
      ...filledForm,
      amount: [count],
    });
  };

  //handles input for guest name
  const handleGuestName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      guestInfo: [
        {
          ...filledForm.guestInfo[0],
          name: e.target.value,
        },
      ],
    });
  };

  //handles input for guest email
  const handleGuestEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      guestInfo: [
        {
          ...filledForm.guestInfo[0],
          email: e.target.value,
        },
      ],
    });
  };

  //handles input for guest phone
  const handleGuestPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      guestInfo: [
        {
          ...filledForm.guestInfo[0],
          phone: e.target.value,
        },
      ],
    });
  };

  //handles input for guest message
  const handleGuestMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      guestInfo: [
        {
          ...filledForm.guestInfo[0],
          message: e.target.value,
        },
      ],
    });
  };

  //handles commit of booking
  const handleSubmit = () => {
    // //add new info about guest to the array in the state
    guestInfoList.push(filledForm.guestInfo[0]);
    guestInfoList.shift();
    filledForm.guestInfo = guestInfoList;

    //booking request contain all the info backend needs about the booking
    bookingRequest.push(filledForm);
    bookingRequest.shift();

    console.log(bookingRequest);
  };

  return (
    <div>
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
          <div>
            <Calendar onChange={handleChosenDate} />
          </div>
        </AddBookingCalanderContainer>
        <AddBookingChooseTimeContainer>
          <AddBookingChooseTimeHolder>
            <h1>Choose a Time</h1>
            <div>
              <section>
                <button onClick={handleFirstTime}>18:00</button>

                <button onClick={handleSecondTime}>21:00</button>
              </section>
            </div>
          </AddBookingChooseTimeHolder>
        </AddBookingChooseTimeContainer>
        <AddBookingChooseAmountContainer>
          <h1>How many?</h1>
          <div>
            <section>
              <button onClick={handleAmountIncrease}>+</button>

              <p>{filledForm.amount}</p>
              <button onClick={handleAmountDecrease}>-</button>
            </section>
          </div>
        </AddBookingChooseAmountContainer>
        <AddBookingFormContainer>
          <AddBookingFormInputFieldsContainer>
            <p>Full Name</p>

            <FormInput
              placeholder="Lars larson"
              onChange={handleGuestName}
            ></FormInput>
            <p>Email</p>
            <FormInput
              placeholder="Lars@larson.se"
              onChange={handleGuestEmail}
            />
            <p>Phone</p>
            <FormInput placeholder="070-1234567" onChange={handleGuestPhone} />
            <p>user request</p>
            <FormInput placeholder="No Caviar" onChange={handleGuestMessage} />
          </AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            <FormButton onClick={handleSubmit}>Book</FormButton>
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </div>
  );
};
