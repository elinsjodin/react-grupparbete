import axios from "axios";
// things to do:
//get a list of the date that is selected. single booking
//check if booking has a 2 date with same date
//check if booking has only 1 then check what time the other one has.
//remove that time slot thats taken from options

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
import { ChangeEvent, useEffect, useState } from "react";
import { FormInput } from "../styledComponents/Inputs";
import { FormButton } from "../styledComponents/Buttons";
import { IBooking } from "../../models/IBooking";

//INTERFACES

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: [];
}
//STATES

export const BookingPage = () => {
  //state for the count of people
  const [count, setCount] = useState(1);

  //state for the date
  const [calanderValue, calanderOnChange] = useState(new Date());

  //state for the booking interface
  const [filledForm, setFilledForm] = useState<IBooking>({
    date: new Date().toDateString(),
    time: "",
    numberOfGuests: 1,
    bookedBy: { name: "", email: "", phone: "", message: "" },
  });

  //state for backend data
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  //FETCHES
  useEffect(() => {
    axios
      .get("http://localhost:3000/bookings")
      .then((res) => {
        setBackendData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //FUNCTIONS in order you see them on screen

  const calanderOnChangeHandler = (date: Date) => {
    setFilledForm({ ...filledForm, date: date.toDateString() });
  };

  //handles click for time
  const handleFirstTime = () => {
    //if the time is already taken, disable the button
    setFilledForm({ ...filledForm, time: "18:00" });
  };

  //handles click for time
  const handleSecondTime = () => {
    setFilledForm({ ...filledForm, time: "21:00" });
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
        numberOfGuests: count + 1,
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
        numberOfGuests: count - 1,
      });
    }
  };

  //handles input for guest name
  const handleGuestName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: {
        ...filledForm.bookedBy,
        name: e.target.value,
      },
    });
  };

  //handles input for guest email
  const handleGuestEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: {
        ...filledForm.bookedBy,
        email: e.target.value,
      },
    });
  };

  //handles input for guest phone
  const handleGuestPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: {
        ...filledForm.bookedBy,
        phone: e.target.value,
      },
    });
  };

  //handles input for guest message
  const handleGuestMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledForm({
      ...filledForm,
      bookedBy: {
        ...filledForm.bookedBy,
        message: e.target.value,
      },
    });
  };

  //handles commit of booking
  const handleSubmit = () => {
    //check if the booking is valid
    if (
      filledForm.date === "" ||
      filledForm.time === "" ||
      filledForm.numberOfGuests === 0
    ) {
      alert("Please fill in all fields");
      return;
    }
    //check if the booking is already taken
    else {
      axios
        .post("http://localhost:3000/bookings", filledForm)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("backend", backendData);
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
              minDate={new Date()}
              onChange={calanderOnChangeHandler}
              value={calanderValue}
              // locale="sv-SE"
            />
          </div>
        </AddBookingCalanderContainer>
        <AddBookingChooseTimeContainer>
          <AddBookingChooseTimeHolder>
            <h1>Choose a Time</h1>
            <div>
              {/* <select name="" id="">
                <option value=""></option>
              </select> */}
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
