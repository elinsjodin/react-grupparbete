import axios from "axios";
import { useState } from "react";
import Calendar from "react-calendar";
import { IBooking } from "../../models/IBooking";
import { FormButton } from "../styledComponents/Buttons";
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
import { FormInput } from "../styledComponents/Inputs";
import {
  AddBookingWrapper,
  BookingHeroWrapper,
} from "../styledComponents/Wrappers";

interface IBackendData {
  bookings: string[];
}

export const SecondAdminPage = () => {
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

  const calanderOnChangeHandler = (date: Date) => {
    calanderOnChange(date);
    setFilledForm({ ...filledForm, date: date.toDateString() });
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
    console.log(filledForm);

    axios
      .get("http://localhost:3000/bookings")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.post("http://localhost:3000/bookings", filledForm).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>
        <BookingHeroWrapper>
          <BookingHeroTitleContainer>
            <h1>id Admin</h1>
          </BookingHeroTitleContainer>
          <BookingHeroContentContainer>ID Booking</BookingHeroContentContainer>
        </BookingHeroWrapper>
        <AddBookingWrapper>
          <AddBookingMonthContainer>July 2022</AddBookingMonthContainer>
          <AddBookingCalanderContainer>
            <div>
              <Calendar
                minDate={new Date()}
                onChange={() => {
                  calanderOnChangeHandler(calanderValue);
                }}
                value={calanderValue}
              />
            </div>
          </AddBookingCalanderContainer>
          <AddBookingChooseTimeContainer>
            <AddBookingChooseTimeHolder>
              <h1>Choose a Time</h1>
              <div>
                <section>
                  <button onClick={handleFirstTime} value={filledForm.time}>
                    18:00
                  </button>

                  <button onClick={handleSecondTime} value={filledForm.time}>
                    21:00
                  </button>
                </section>
              </div>
            </AddBookingChooseTimeHolder>
          </AddBookingChooseTimeContainer>
          <AddBookingChooseAmountContainer>
            <h1>How many?</h1>
            <div>
              <section>
                <button
                  onClick={handleAmountIncrease}
                  value={filledForm.numberOfGuests}
                >
                  +
                </button>
                <p>{count}</p>
                <button
                  onClick={handleAmountDecrease}
                  value={filledForm.numberOfGuests}
                >
                  -
                </button>
              </section>
            </div>
          </AddBookingChooseAmountContainer>
          <AddBookingFormContainer>
            <AddBookingFormInputFieldsContainer>
              <p>Full Name</p>

              <FormInput
                placeholder={filledForm.bookedBy.name}
                onChange={handleGuestName}
                value={filledForm.bookedBy.name}
              ></FormInput>
              <p>Email</p>
              <FormInput
                placeholder={filledForm.bookedBy.email}
                onChange={handleGuestEmail}
                value={filledForm.bookedBy.email}
              />
              <p>Phone</p>
              <FormInput
                placeholder={filledForm.bookedBy.phone}
                onChange={handleGuestPhone}
                value={filledForm.bookedBy.phone}
              />
              <p>Message</p>
              <FormInput
                placeholder={filledForm.bookedBy.message}
                onChange={handleGuestMessage}
                value={filledForm.bookedBy.message}
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
