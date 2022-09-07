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

interface IBookingsProps {
  results: IBooking[];
}

export const AdminForm = (props: IBookingsProps) => {
  const [count, setCount] = useState(1);

  const [value, setValue] = useState(new Date());

  const [filledForm, setFilledForm] = useState<IBooking>({
    date: new Date().toDateString(),
    time: "",
    numberOfGuests: 1,
    bookedBy: { name: "", email: "", phone: "", message: "" },
  });

  const [dateTaken, setDateTaken] = useState(false);

  //handles the date state change
  const handleBookingDate = (date: Date) => {
    setValue(date);
    setFilledForm({ ...filledForm, date: date.toDateString() });
  };

  //handles the date vailidation and sets the dateTaken state
  const handlesetValue = (date: Date) => {
    handleBookingDate(date);

    if (
      props.results.filter((booking) => booking.date === date.toDateString())
        .length > 30
    ) {
      console.log("date taken");
      setDateTaken(true);
    } else {
      console.log("date not taken");
      setDateTaken(false);
    }
  };

  //handles validation for if the time is taken
  const handleFirstTime = () => {
    let count = 0;
    props.results.forEach((booking) => {
      if (booking.date === filledForm.date && booking.time === "18:00") {
        count++;
      }
    });
    if (count < 15) {
      console.log("time is not taken");
      setFilledForm({ ...filledForm, time: "18:00" });
    } else {
      console.log("date is taken");
      setDateTaken(true);
    }
  };

  //handles validation for if the time is taken
  const handleSecondTime = () => {
    let count = 0;
    props.results.forEach((booking) => {
      if (booking.date === filledForm.date && booking.time === "21:00") {
        count++;
      }
    });
    if (count < 15) {
      console.log("time is not taken");
      setFilledForm({ ...filledForm, time: "18:00" });
    } else {
      console.log("date is taken");
      setDateTaken(true);
    }
  };

  //handles the number of guests state change for increment
  const handleAmountIncrease = () => {
    if (count > 5) {
      setCount(count + 1);
      console.log("special booking ");
    } else {
      setCount(count + 1);
      setFilledForm({
        ...filledForm,
        numberOfGuests: count + 1,
      });
    }
  };

  //handles the number of guests state change for decrease
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

  //handles the name state change and sets the bookedBy state
  const handleGuestName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20 && e.target.value.length < 3) {
      alert("Name can't be longer than 20 characters");
    } else {
      setFilledForm({
        ...filledForm,
        bookedBy: {
          ...filledForm.bookedBy,
          name: e.target.value,
        },
      });
    }
  };

  //handles the email state change and sets the bookedBy state
  const handleGuestEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 30) {
      setFilledForm({
        ...filledForm,
        bookedBy: {
          ...filledForm.bookedBy,
          email: e.target.value,
        },
      });
    } else {
      alert("Please enter a valid email");
    }
  };

  //handles the phone state change and sets the bookedBy state
  const handleGuestPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8 && e.target.value.length < 8) {
      alert("Phone number can't be more than 8 digits");
    } else {
      setFilledForm({
        ...filledForm,
        bookedBy: {
          ...filledForm.bookedBy,
          phone: e.target.value,
        },
      });
    }
  };

  //handles the message state change and sets the bookedBy state
  const handleGuestMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 100) {
      setFilledForm({
        ...filledForm,
        bookedBy: {
          ...filledForm.bookedBy,
          message: e.target.value,
        },
      });
    } else {
      alert("Message can't be longer than 100 characters");
    }
  };

  //handles the submit button and sends the data to the database
  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/bookings", filledForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
                onChange={handlesetValue}
                value={value}
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
