//IMPORT MISC
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { GdprModal } from "../GdprModal";

//IMPORT STYLING
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
import { Loader } from "../Loader";

//interface for bookings
interface IBookingsProps {
  results: IBooking[];
}

export const BookingForm = (props: IBookingsProps) => {
  const [count, setCount] = useState(1);

  const [value, setValue] = useState(new Date());

  const [filledForm, setFilledForm] = useState<IBooking>({
    date: new Date().toDateString(),
    time: "",
    numberOfGuests: 1,
    bookedBy: { name: "", email: "", phone: "", message: "" },
  });

  const [dateTaken, setDateTaken] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [modalButton, setModalButton] = useState(true);

  const [gdprChecked, setGdprChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  //handles the date state changex
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
    if (
      e.target.value.includes("@") &&
      e.target.value.includes(".") &&
      e.target.value.length < 30
    ) {
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
    if (e.target.value.length > 100) {
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
    setTimeout(() => {
      setLoading(false);
    }, 1000);

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
                  <button
                    className="first-seating-btn"
                    onClick={handleFirstTime}
                  >
                    18:00
                  </button>
                )}
                {dateTaken ? null : (
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

              <p>{count}</p>
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
            <p>user request</p>
            <FormInput
              className="message-field"
              placeholder="No Caviar"
              onChange={handleGuestMessage}
            />
          </AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            {gdprChecked ? (
              <FormButton
                onClick={() => {
                  handleSubmit();
                  setLoading(true);
                }}
              >
                Book
              </FormButton>
            ) : (
              <div>
                {modalButton ? (
                  <FormButton
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
            {/* <Link to={"/confirm"}>
              {" "}
              <FormButton className="booking-btn" onClick={handleSubmit}>
                Book
              </FormButton>
            </Link> */}
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
      {loading ? <Loader loading={loading} /> : null}
    </div>
  );
};
