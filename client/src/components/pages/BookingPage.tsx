//imported styles
import {
  BookingHeroWrapper,
  AddBookingWrapper,
} from "../styledComponents/Wrappers";

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
import { arrayBuffer } from "stream/consumers";

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: string[];
}

//this interface is used to define the properties of the booking form
interface IForm {
  time: string;
  amount: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

//this interface is used to define the properties of the filled form
interface IFilledForm {
  filledForm: IForm[];
}

export const BookingPage = () => {
  //state for the backend data
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  //state for the form
  const [filledForm, setFilledForm] = useState<IFilledForm>({
    filledForm: [],
  });

  //array to push form in too
  const [guestInfoList, setGuestInfoList] = useState<[]>([]);

  // fetch data from backend and set it to state
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {/* typeof is used to check if the data is an array */}
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        //map through the data and return a list of bookings
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}
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
          Placeholder for calander
        </AddBookingCalanderContainer>
        <AddBookingChooseTimeContainer>
          <AddBookingChooseTimeHolder>
            <h1>Choose a Time</h1>
            <div>
              <section>
                <button>18:00</button>
                <button>21:00</button>
              </section>
            </div>
          </AddBookingChooseTimeHolder>
        </AddBookingChooseTimeContainer>
        <AddBookingChooseAmountContainer>
          <h1>How many?</h1>
          <div>
            <section>
              <button>+</button>
              <p>4</p>
              <button>-</button>
            </section>
          </div>
        </AddBookingChooseAmountContainer>
        <AddBookingFormContainer>
          <AddBookingFormInputFieldsContainer>
            <p>Full Name</p>
            <FormInput placeholder="Lars larson" />
            <p>Email</p>
            <FormInput placeholder="lars@larson.com" />
            <p>Phone</p>
            <FormInput placeholder="1689490153" />
            <p>user request</p>
            <FormInput placeholder="vegan" />
          </AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            <FormButton>Book</FormButton>
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </div>
  );
};
