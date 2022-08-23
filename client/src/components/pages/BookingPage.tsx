import axios from "axios";

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
  const [count, setCount] = useState(1);

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
    numberOfGuests: [1],
    bookedBy: [{ name: "", email: "", phone: "", message: "" }],
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
    // if user chosen a past date, set date to today

    setFilledForm({ ...filledForm, date: [calanderDate.toDateString()] });
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
    if (count === 6) {
      alert(
        "You can't book for more than 6 people, if you need more please contact us"
      );
    } else {
      setCount(count + 1);
      setFilledForm({
        ...filledForm,
        numberOfGuests: [count],
      });
    }
  };

  //handles amount of guest decrease
  const handleAmountDecrease = () => {
    if (count === 1) {
      return;
    } else {
      setCount(count - 1);
      setFilledForm({
        ...filledForm,
        numberOfGuests: [count],
      });
    }
  };

  //handles input for guest name
  const handleGuestName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: [
        {
          ...filledForm.bookedBy[0],
          name: e.target.value,
        },
      ],
    });
  };

  //handles input for guest email
  const handleGuestEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: [
        {
          ...filledForm.bookedBy[0],
          email: e.target.value,
        },
      ],
    });
  };

  //handles input for guest phone
  const handleGuestPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: [
        {
          ...filledForm.bookedBy[0],
          phone: e.target.value,
        },
      ],
    });
  };

  //handles input for guest message
  const handleGuestMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: [
        {
          ...filledForm.bookedBy[0],
          message: e.target.value,
        },
      ],
    });
  };

  //handles commit of booking
  const handleSubmit = () => {
    //check if all fields are filled
    if (
      filledForm.date[0] === undefined ||
      filledForm.time[0] === undefined ||
      filledForm.numberOfGuests[0] === undefined ||
      filledForm.bookedBy[0].name === "" ||
      filledForm.bookedBy[0].email === "" ||
      filledForm.bookedBy[0].phone === "" ||
      filledForm.bookedBy[0].name.indexOf(" ") === 1 ||
      filledForm.bookedBy[0].email.indexOf("@") === -1 ||
      filledForm.bookedBy[0].email.indexOf(".") === -1 ||
      filledForm.bookedBy[0].email.indexOf(" ") !== -1 ||
      filledForm.bookedBy[0].phone.length !== 10 ||
      filledForm.bookedBy[0].phone.indexOf(" ") !== -1 ||
      filledForm.bookedBy[0].phone.indexOf("-") !== -1
    ) {
      alert("Make sure all fields are filled");
    }
    //check if date is in the past
    else {
      //add new info about guest to the array in the state
      guestInfoList.push(filledForm.bookedBy[0]);
      guestInfoList.shift();
      filledForm.bookedBy = guestInfoList;

      //booking request contain all the info backend needs about the booking
      bookingRequest.push(filledForm);

      bookingRequest.shift();

      console.log(bookingRequest);

      // send booking request to backend
      axios.post("/bookings", bookingRequest).then((res) => {
        console.log(res);
      });
    }
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
            <Calendar
              onChange={handleChosenDate}
              value={calanderDate}
              minDate={new Date()}
            />
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

              <p>{count}</p>
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
            <FormInput placeholder="0701234567" onChange={handleGuestPhone} />
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
