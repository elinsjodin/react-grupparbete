import axios from "axios";

import { useState } from "react";
import Calendar from "react-calendar";
import { Link, useParams } from "react-router-dom";
import { IEditBooking } from "../../models/IBooking";
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

import {
  AddBookingWrapper,
  BookingHeroWrapper,
} from "../styledComponents/Wrappers";

interface IBookingsProps {
  results: IEditBooking[];
}

export const SecondAdminForm = (props: IBookingsProps) => {
  const [count, setCount] = useState(1);

  const { id } = useParams<{ id: string }>();

  const [value, setValue] = useState(new Date());

  const [filledForm, setFilledForm] = useState<IEditBooking>({
    date: new Date().toDateString(),
    time: "",
    numberOfGuests: 1,
  });

  //handles the date state change
  const handleBookingDate = (date: Date) => {
    setValue(date);
    setFilledForm({ ...filledForm, date: date.toDateString() });
  };

  //handles the date vailidation and sets the dateTaken state
  const handlesetValue = (date: Date) => {
    handleBookingDate(date);
  };

  //handles validation for if the time is taken
  const handleFirstTime = () => {
    setFilledForm({ ...filledForm, time: "18:00" });
  };

  //handles validation for if the time is taken
  const handleSecondTime = () => {
    setFilledForm({ ...filledForm, time: "21:00" });
  };

  //handles the number of guests state change for increment
  const handleAmountIncrease = () => {
    setCount(count + 1);
    setFilledForm({
      ...filledForm,
      numberOfGuests: count + 1,
    });
  };

  //handles the number of guests state change for decrease
  const handleAmountDecrease = () => {
    setCount(count - 1);
    setFilledForm({
      ...filledForm,
      numberOfGuests: count - 1,
    });
  };

  //handles the submit button and sends the data to the database
  const handleSubmit = () => {
    axios
      .put("http://localhost:3000/admin/edit/" + id, filledForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    //delete the booking with same id as the url params
    axios
      .delete("http://localhost:3000/admin/booking/delete/" + id)
      .then((response) => {
        alert("Deleted!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
                <button
                  className="first-seating-btn"
                  onClick={handleFirstTime}
                  value={filledForm.time}
                >
                  18:00
                </button>

                <button
                  className="second-seating-btn"
                  onClick={handleSecondTime}
                  value={filledForm.time}
                >
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
                className="inc-guest-amount"
                onClick={handleAmountIncrease}
                value={filledForm.numberOfGuests}
              >
                +
              </button>
              <p className="guest-amount">{count}</p>
              <button
                className="dec-guest-amount"
                onClick={handleAmountDecrease}
                value={filledForm.numberOfGuests}
              >
                -
              </button>
            </section>
          </div>
        </AddBookingChooseAmountContainer>
        <AddBookingFormContainer>
          <AddBookingFormInputFieldsContainer></AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            <FormButton className="update-booking-btn" onClick={handleSubmit}>
              Update
            </FormButton>
            <FormButton className="delete-booking-btn" onClick={handleDelete}>
              Delete
            </FormButton>
            <Link to="/admin">
              <FormButton className="back-to-admin-btn">Back</FormButton>
            </Link>
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </div>
  );
};
