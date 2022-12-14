import axios from "axios";
import { useState } from "react";
import Calendar from "react-calendar";
import { IBooking } from "../../models/IBooking";
import { GdprModal } from "../GdprModal";
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
import { Link } from "react-router-dom";

interface IBookingsProps {
  results: IBooking[];
}

export const BookingForm = (props: IBookingsProps) => {
  const [count, setCount] = useState(1);

  const [value, setValue] = useState(new Date());

  const [filledForm, setFilledForm] = useState<IBooking>({
    _id: "",
    date: new Date().toDateString(),
    time: "",
    numberOfGuests: 1,
    bookedBy: { _id: "", name: "", email: "", phone: "", message: "" },
  });

  const [timeTaken, setTimeTaken] = useState(false);

  const [secondTimeTaken, setSecondTimeTaken] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [modalButton, setModalButton] = useState(true);

  const [gdprChecked, setGdprChecked] = useState(false);

  //handles the date state changex
  const handleBookingDate = (date: Date) => {
    setValue(date);
    setFilledForm({ ...filledForm, date: date.toDateString() });
  };

  //handles the date vailidation and sets the dateTaken state
  const handlesetValue = (date: Date) => {
    handleBookingDate(date);

    for (let i = 0; i < props.results.length; i++) {
      const guests = props.results[i].numberOfGuests;
      if (
        props.results.filter((booking) => booking.date === date.toDateString())
          .length >= 30 &&
        guests >= 180
      ) {
        alert("We are fully booked on this day!");
        setTimeTaken(true);
      } else {
        setTimeTaken(false);
      }
    }
  };

  //handles validation for if the time is taken
  const handleFirstTime = () => {
    let count = 0;
    props.results.forEach((booking) => {
      if (booking.date === filledForm.date && booking.time === "18:00") {
        count += Math.ceil(booking.numberOfGuests / 6);
      }
    });
    if (count >= 16) {
      setTimeTaken(true);
    } else {
      setFilledForm({ ...filledForm, time: "18:00" });
    }
  };

  //handles validation for if the time is taken
  const handleSecondTime = () => {
    let count = 0;
    props.results.forEach((booking) => {
      if (booking.date === filledForm.date && booking.time === "21:00") {
        count += Math.ceil(booking.numberOfGuests / 6);
      }
    });
    if (count >= 16) {
      setSecondTimeTaken(true);
    } else {
      setFilledForm({ ...filledForm, time: "21:00" });
    }
  };

  //handles the number of guests state change for increment
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
    if (e.target.value.length > 20) {
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
    if (e.target.value.length < 40) {
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
    if (
      filledForm.bookedBy.name === "" ||
      filledForm.bookedBy.email === "" ||
      filledForm.bookedBy.phone === "" ||
      filledForm.date === "" ||
      filledForm.time === "" ||
      filledForm.numberOfGuests === 0
    ) {
      alert("Please fill in all the fields");
      window.location.href = "http://localhost:3000/bookings";
    } else {
      // for (let i = 0; i < props.results.length; i++) {
      //   const guests = props.results[i].numberOfGuests;

      //   if (guests >= 90) {
      //     alert("We are fully booked on this day!");
      //     return guests;
      //   } else {
      axios
        .post("http://localhost:3000/bookings", filledForm)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      //return;
    }
  };
  //}
  //};

  return (
    <div>
      <BookingHeroWrapper>
        <BookingHeroTitleContainer>
          <h1>Booking</h1>
        </BookingHeroTitleContainer>
        <BookingHeroContentContainer>
          <p>
            To book a table please choose a desired date and the amount of
            people dining. we only accept tables of 6 so if you are more, please
            contact us
          </p>
        </BookingHeroContentContainer>
      </BookingHeroWrapper>
      <AddBookingWrapper>
        <AddBookingMonthContainer>
          <h1>Choose A date</h1>
        </AddBookingMonthContainer>
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
            <h1>Choose A Time</h1>
            <div>
              {timeTaken ? <p>Sorry this time is not available!</p> : null}
              <section>
                {timeTaken ? (
                  true
                ) : (
                  <button
                    className="first-seating-btn"
                    onClick={handleFirstTime}
                  >
                    18:00
                  </button>
                )}
                {secondTimeTaken ? (
                  <p>Sorry this time is not available!</p>
                ) : null}
                {secondTimeTaken ? (
                  true
                ) : (
                  <button
                    className="second-seating-btn"
                    onClick={handleSecondTime}
                  >
                    21:00
                  </button>
                )}
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
              >
                +
              </button>

              <p className="guest-amount">{count}</p>
              <button
                className="dec-guest-amount"
                onClick={handleAmountDecrease}
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
              className="full-name-field"
              placeholder="Lars larson"
              onChange={handleGuestName}
            ></FormInput>
            <p>Email</p>
            <FormInput
              className="email-field"
              placeholder="Lars@larson.se"
              onChange={handleGuestEmail}
            />
            <p>Phone</p>
            <FormInput
              className="phone-field"
              placeholder="0701234567"
              onChange={handleGuestPhone}
            />
            <p>User request</p>
            <FormInput
              className="message-field"
              placeholder="No Caviar"
              onChange={handleGuestMessage}
            />
          </AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            {gdprChecked ? (
              <FormButton
                className="booking-btn"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <Link to="/confirm">Book</Link>
              </FormButton>
            ) : (
              <div>
                {modalButton ? (
                  <FormButton
                    className="gdpr-btn"
                    onClick={() => {
                      setShowModal(true);
                      setModalButton(false);
                    }}
                  >
                    GDPR Info
                  </FormButton>
                ) : (
                  <GdprModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setGdprChecked={setGdprChecked}
                  />
                )}
              </div>
            )}
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </div>
  );
};
