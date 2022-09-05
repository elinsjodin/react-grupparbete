import axios from "axios";
import { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
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

export const BookingForm = (props: IBookingsProps) => {
  //STATES----------------------------------------------
  //state for the count of people
  const [count, setCount] = useState(1);

  //state for the date
  const [value, setValue] = useState(new Date());

  //state for the booking interface
  const [filledForm, setFilledForm] = useState<IBooking>({
    date: new Date().toDateString(),
    time: "",
    numberOfGuests: 1,
    bookedBy: { name: "", email: "", phone: "", message: "" },
  });

  //state for if date is taken
  const [dateTaken, setDateTaken] = useState(false);

  const { matchDate } = useParams<{ matchDate: string }>();

  //FUNCTIONS in order you see them on screen

  //HANDLE DATE------------------------------------------
  const handleBookingDate = (date: Date) => {
    setValue(date);
    setFilledForm({ ...filledForm, date: date.toDateString() });
  };

  const handlesetValue = (date: Date) => {
    handleBookingDate(date);

    props.results.forEach((booking) => {
      if (booking.date === date.toDateString() && booking.date.length < 15) {
        setDateTaken(true);
        console.log("date taken");
      } else {
        setDateTaken(false);
        console.log("date is not taken");
      }
    });
    console.log(filledForm);

    //checks if date is taken
  };

  //HANDLE TIME ---------------------------------------------

  //handles click for time
  const handleFirstTime = () => {
    setFilledForm({ ...filledForm, time: "18:00" });

    //if date is taken with that time
    props.results.forEach((booking) => {
      if (booking.date === filledForm.date && booking.time === "18:00") {
        setDateTaken(true);
        console.log("date taken");
      }
    });

    console.log(filledForm);
  };

  //handles click for time
  const handleSecondTime = () => {
    setFilledForm({ ...filledForm, time: "21:00" });

    //if date is taken with that time
    props.results.forEach((booking) => {
      if (booking.date === filledForm.date && booking.time === "21:00") {
        setDateTaken(true);
        console.log("date taken");
      }
    });

    console.log(filledForm);
  };

  //HANDLE COUNT-----------------------------------------------------------
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
      console.log(filledForm);
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
      console.log(filledForm);
    }
  };

  //HANDLE INPUTS-----------------------------------------------------------
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
  //HANDLE SUBMIT-----------------------------------------------------------
  //handles commit of booking
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
