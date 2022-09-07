import axios from "axios";
import { useState } from "react";
import Calendar from "react-calendar";
import { Link, useParams } from "react-router-dom";
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

//interface for bookings
interface IBookingsProps {
  results: IBooking[];
}

export const AdminForm = (props: IBookingsProps) => {
  const [count, setCount] = useState(1);

  const { id } = useParams<{ id: string }>();

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
    console.log(props.results);
  };

  //handles the date vailidation and sets the dateTaken state
  const handlesetValue = (date: Date) => {
    handleBookingDate(date);
    setFilledForm({ ...filledForm, date: date.toDateString() });
    console.log(filledForm.date);
  };

  //handles validation for if the time is taken
  const handleFirstTime = () => {
    setFilledForm({ ...filledForm, time: "18:00" });
    console.log(filledForm.time);
  };

  //handles validation for if the time is taken
  const handleSecondTime = () => {
    setFilledForm({ ...filledForm, time: "21:00" });
    console.log(filledForm.time);
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
      .put(`http://localhost:3000/admin/${id}`, filledForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("det som finns i databasen", props.results);
    console.log("det vi vill byta databasen till", filledForm);
  };

  return (
    <div>
      <BookingHeroWrapper>
        <BookingHeroTitleContainer>
          <h1>Admin ID</h1>
        </BookingHeroTitleContainer>
        <BookingHeroContentContainer></BookingHeroContentContainer>
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
                {/* if date is full then we remove appropriate button */}
                {dateTaken ? null : (
                  <button onClick={handleFirstTime}>18:00</button>
                )}
                {dateTaken ? null : (
                  <button onClick={handleSecondTime}>21:00</button>
                )}
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
