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
import { IBooking } from "../../models/IBooking";

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: IBooking[];
}

export const BookingPage = () => {
  //state for the backend data
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  //state for the booking interface
  const [filledForm, setFilledForm] = useState<IBooking>({
    date: "",
    time: [],
    amount: ["1"],
    guestInfo: [{ name: "", email: "", phone: "", message: "" }],
  });

  //array to push form in too
  const [guestInfoList, setGuestInfoList] = useState<[{}]>([{}]);

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
                <button
                  onClick={() => {
                    //add time to the array in the state
                    setFilledForm({
                      //... is used to spread the array in the state and add the new time
                      ...filledForm,
                      //time is an array and push the new time to the array
                      time: ["18:00"],
                    });
                    console.log(filledForm);
                  }}
                >
                  18:00
                </button>

                <button
                  onClick={() => {
                    setFilledForm({
                      ...filledForm,
                      time: ["21:00"],
                    });
                    console.log(filledForm);
                  }}
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
                onClick={() => {
                  //add time to the array in the state
                  setFilledForm({
                    ...filledForm,
                    amount: ["2"],
                  });
                  console.log(filledForm);
                }}
              >
                +
              </button>

              <p>{filledForm.amount}</p>
              <button
                onClick={() => {
                  //add time to the array in the state
                  setFilledForm({
                    ...filledForm,
                    amount: ["1"],
                  });
                  console.log(filledForm);
                }}
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
              placeholder="Lars larson"
              onChange={(e) => {
                setFilledForm({
                  ...filledForm,
                  guestInfo: [
                    {
                      name: e.target.value,
                      email: filledForm.guestInfo[0].email,
                      phone: filledForm.guestInfo[0].phone,
                      message: filledForm.guestInfo[0].message,
                    },
                  ],
                });
              }}
            ></FormInput>
            <p>Email</p>
            <FormInput
              placeholder="Lars@larson.se"
              onChange={(e) => {
                setFilledForm({
                  ...filledForm,
                  guestInfo: [
                    {
                      name: filledForm.guestInfo[0].name,
                      email: e.target.value,
                      phone: filledForm.guestInfo[0].phone,
                      message: filledForm.guestInfo[0].message,
                    },
                  ],
                });
              }}
            />
            <p>Phone</p>
            <FormInput
              placeholder="070-1234567"
              onChange={(e) => {
                setFilledForm({
                  ...filledForm,
                  guestInfo: [
                    {
                      name: filledForm.guestInfo[0].name,
                      email: filledForm.guestInfo[0].email,
                      phone: e.target.value,
                      message: filledForm.guestInfo[0].message,
                    },
                  ],
                });
              }}
            />
            <p>user request</p>
            <FormInput
              placeholder="No Caviar"
              onChange={(e) => {
                setFilledForm({
                  ...filledForm,
                  guestInfo: [
                    {
                      name: filledForm.guestInfo[0].name,
                      email: filledForm.guestInfo[0].email,
                      phone: filledForm.guestInfo[0].phone,
                      message: e.target.value,
                    },
                  ],
                });
              }}
            />
          </AddBookingFormInputFieldsContainer>
          <AddBookingFormButtonFieldsContainer>
            <FormButton
              onClick={() => {
                guestInfoList.push(filledForm.guestInfo[0]);
                guestInfoList.shift();
                setGuestInfoList(guestInfoList);
                console.log(guestInfoList);
              }}
            >
              Book
            </FormButton>
          </AddBookingFormButtonFieldsContainer>
        </AddBookingFormContainer>
      </AddBookingWrapper>
    </div>
  );
};
