import { isPropertySignature } from "typescript";
import { FormButton } from "../styledComponents/Buttons";
import {
  AddBookingFormButtonFieldsContainer,
  AddBookingFormContainer,
  AddBookingFormInputFieldsContainer,
} from "../styledComponents/Containers";
import { FormInput } from "../styledComponents/Inputs";

type IguestInfoProps = {
  label: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const BookingForm = (props: IguestInfoProps) => {
  return (
    <div>
      <AddBookingFormContainer>
        <AddBookingFormInputFieldsContainer>
          <p>Full Name</p>
          <FormInput placeholder="Lars larson" value={props.name} />
          <p>Email</p>
          <FormInput placeholder="lars@larson.com" value={props.email} />
          <p>Phone</p>
          <FormInput placeholder="1689490153" value={props.phone} />
          <p>user request</p>
          <FormInput placeholder="vegan" value={props.message} />
        </AddBookingFormInputFieldsContainer>
        <AddBookingFormButtonFieldsContainer>
          <FormButton>Book</FormButton>
        </AddBookingFormButtonFieldsContainer>
      </AddBookingFormContainer>
      ;
    </div>
  );
};
