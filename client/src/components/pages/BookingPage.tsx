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

  //state for the booking interface
  const [filledForm, setFilledForm] = useState<IBooking>({
    date: "",
    time: "",
    numberOfGuests: 1,
    bookedBy: { name: "", email: "", phone: "", message: "" },
  });

  //state for the backend data
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  //FETCHES
  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBackendData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //FUNCTIONS in order you see them on screen

  //handles calander date change
  const handleChosenDate = () => {
    //sets the date to the state
    setCalanderDate(calanderDate);
    setFilledForm({ ...filledForm, date: calanderDate.toDateString() });

    // //checks if the date is already booked
    // const booked = backendData.bookings.find(
    //   (booking) => booking.date === calanderDate.toDateString()
    // );
    // if (booked) {
    //   setFilledForm({ ...filledForm, time: booked.time });
    // } else {
    //   setFilledForm({ ...filledForm, time: "whyyy" });
    // }

    console.log(filledForm.date);
  };

  //handles click for time
  const handleFirstTime = () => {
    setFilledForm({
      ...filledForm,
      time: "18:00",
    });
  };

  //handles click for time
  const handleSecondTime = () => {
    setFilledForm({
      ...filledForm,
      time: "21:00",
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
        numberOfGuests: count + 1,
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
    console.log(filledForm);

    axios
      .get("http://localhost:3000/bookings")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filledForm),
    }).then((res) => res.json());
    alert("Your booking has been sent");
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
              locale="sv-SE"
              minDate={new Date()}
            />
          </div>
        </AddBookingCalanderContainer>
        <AddBookingChooseTimeContainer>
          <AddBookingChooseTimeHolder>
            <h1>Choose a Time</h1>
            <div>
              <section>
                {/* if date has been taken, disable button */}
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
