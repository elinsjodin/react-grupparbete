import { useEffect, useState } from "react";
import axios from "axios";
import {
  AddBookingWrapper,
  BookingHeroWrapper,
} from "../styledComponents/Wrappers";
import {
  AddBookingCalanderContainer,
  AddBookingChooseAmountContainer,
  AddBookingChooseTimeContainer,
  AddBookingChooseTimeHolder,
  AddBookingFormButtonFieldsContainer,
  AddBookingFormContainer,
  AddBookingFormInputFieldsContainer,
  AddBookingMonthContainer,
  BookingHeroContentContainer,
  BookingHeroTitleContainer,
} from "../styledComponents/Containers";

import Calendar from "react-calendar";
import { FormInput } from "../styledComponents/Inputs";
import { FormButton } from "../styledComponents/Buttons";
import { IBooking } from "../../models/IBooking";

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: string[];
}

export const AdminPage = () => {
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });
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

  //FETCHES

  // fetch data from backend and set it to state
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //FUNCTIONS in order you see them on screen

  const handleChosenDate = () => {
    // if user chosen a past date, set date to today

    setFilledForm({ ...filledForm, date: calanderDate.toDateString() });
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
        numberOfGuests: count,
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
        numberOfGuests: count,
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
    //add new info about guest to the array in the state
    console.log(filledForm);

    axios.post("http://localhost:3000/bookings", filledForm).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>
        <BookingHeroWrapper>
          <BookingHeroTitleContainer>
            <h1>Admin</h1>
          </BookingHeroTitleContainer>
          <BookingHeroContentContainer>
            <ul>
              {/* <li>
                Bookings <button onClick={deleteBooking}></button>
              </li> */}
            </ul>
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
              <FormInput
                placeholder="No Caviar"
                onChange={handleGuestMessage}
              />
            </AddBookingFormInputFieldsContainer>
            <AddBookingFormButtonFieldsContainer>
              <FormButton onClick={handleSubmit}>Book</FormButton>
            </AddBookingFormButtonFieldsContainer>
          </AddBookingFormContainer>
        </AddBookingWrapper>
      </div>
    </>
  );
};
