import axios from "axios";
import { useState } from "react";
import { IEditGuest } from "../../models/IBooking";
import { FormButton } from "../styledComponents/Buttons";
import {
  AddBookingFormButtonFieldsContainer,
  AddBookingFormContainer,
  AddBookingFormInputFieldsContainer,
} from "../styledComponents/Containers";
import { FormInput } from "../styledComponents/Inputs";

interface IBookingsProps {
  results: IEditGuest[];
}

export const GuestForm = (props: IBookingsProps) => {
  const [filledForm, setFilledForm] = useState<IEditGuest>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //handles the name state change and sets the bookedBy state
  const handleGuestName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20 && e.target.value.length < 3) {
      alert("Name can't be longer than 20 characters");
    } else {
      setFilledForm({
        ...filledForm,
        name: e.target.value,
      });
    }
  };

  //handles the email state change and sets the bookedBy state
  const handleGuestEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 30) {
      setFilledForm({
        ...filledForm,
        email: e.target.value,
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
        phone: e.target.value,
      });
    }
  };

  //handles the message state change and sets the bookedBy state
  const handleGuestMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 100) {
      setFilledForm({
        ...filledForm,
        message: e.target.value,
      });
    } else {
      alert("Message can't be longer than 100 characters");
    }
  };

  //handles the submit button and sends the data to the database
  const handleSubmit = () => {
    axios
      .put("http://localhost:3000/bookings", filledForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <AddBookingFormContainer>
        <AddBookingFormInputFieldsContainer>
          <p>Full Name</p>

          <FormInput
            placeholder="Lars larson"
            onChange={handleGuestName}
          ></FormInput>
          <p>Email</p>
          <FormInput placeholder="Lars@larson.se" onChange={handleGuestEmail} />
          <p>Phone</p>
          <FormInput placeholder="0701234567" onChange={handleGuestPhone} />
          <p>user request</p>
          <FormInput placeholder="No Caviar" onChange={handleGuestMessage} />
        </AddBookingFormInputFieldsContainer>
        <AddBookingFormButtonFieldsContainer>
          <FormButton onClick={handleSubmit}>Book</FormButton>
        </AddBookingFormButtonFieldsContainer>
      </AddBookingFormContainer>
    </div>
  );
};
