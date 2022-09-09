import {
  ContacTitleContainer,
  ContactTextContainer,
  FindUsTitleContainer,
  FindUsTextContainer,
  FollowTitleContainer,
} from "../styledComponents/Containers";
import {
  ContactWrapper,
  FindUsWrapper,
  FollowUsWrapper,
} from "../styledComponents/Wrappers";

export const ContactPage = () => {
  return (
    <div>
      <ContactWrapper>
        <ContacTitleContainer>Contact</ContacTitleContainer>
        <ContactTextContainer>
          <p>Are you more than 6 people?</p>
          Contact us and we will make reservtions for you
          <div>sorkins@sorkins.com</div>
        </ContactTextContainer>
      </ContactWrapper>

      <FindUsWrapper>
        <FindUsTextContainer>
          <p>Anywherestreet 12345 Stockholm</p>
          <div>A short walk from Stockholm Odenplan</div>
        </FindUsTextContainer>
        <FindUsTitleContainer>Find us</FindUsTitleContainer>
      </FindUsWrapper>
      <FollowUsWrapper>
        <FollowTitleContainer>Follow us</FollowTitleContainer>
      </FollowUsWrapper>
    </div>
  );
};
