import styled from "styled-components";
import MainHeroImg from "../assets/images-4.jpeg";

// wrappers => Containers => Text

//NAVBAR

//container for navbar
export const NavLogo = styled.div`
  display: flex;
`;

//container for navbar
export const NavLinks = styled.div`
  display: flex;
`;

//BOOKING

//container for hero title of booking page
export const BookingHeroTitleContainer = styled.div`
  display: flex;
`;
//container for hero content of booking page
export const BookingHeroContentContainer = styled.div`
  display: flex;
`;

//container for booking form and input
export const AddBookingMonthContainer = styled.div`
  display: flex;
`;

//container for booking form and input
export const AddBookingCalanderContainer = styled.div`
  display: flex;
`;
//container for booking form and input
export const AddBookingChooseTimeContainer = styled.div`
  display: flex;
`;

//container for booking form and input
export const AddBookingFormContainer = styled.div`
  display: flex;
`;

export const AddBookingFormInputFieldsContainer = styled.div`
  display: flex;
`;

export const AddBookingFormButtonFieldsContainer = styled.div`
  display: flex;
`;

//container Main Page - Hero
export const MainHeroContentContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
`;

export const MainHeroImgContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;

  img {
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

export const MainHeroTextContainer = styled.div`
  display: flex;
  text-align: left;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-left: 15px;
  padding-bottom: 15px;
`;
export const MainHeroTitleContainer = styled.div`
  font-size: clamp(1.5em, 2.9vw, 3em);
  display: flex;
  width: 100%;
  color: white;
  justify-content: right;
  align-items: center;
  margin-right: 16px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

//container Main Page - Menu

export const MenuContentContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
`;

export const MenuTitleContainer = styled.div`
  font-size: clamp(1.5em, 2.9vw, 3em);
  display: flex;
  width: 100%;
  color: white;
  justify-content: left;
  align-items: center;
  margin-left: 16px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const MenuImageContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;

  img {
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;
export const MenuTextContainer = styled.div`
  display: flex;
  text-align: left;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-right: 15px;
  padding-bottom: 15px;
`;

//container Main Page - Booking

export const MainBookingContentContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
`;

export const MainBookingImgContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;

  img {
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

export const MainBookingTextContainer = styled.div`
  display: flex;
  text-align: left;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-left: 15px;
  padding-bottom: 15px;
`;
export const MainBookingTitleContainer = styled.div`
  font-size: clamp(1.5em, 2.9vw, 3em);
  display: flex;
  width: 100%;
  color: white;
  justify-content: right;
  align-items: center;
  margin-right: 16px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

// Container Main Page - Contact

export const MainContactContentContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
`;

export const MainContactImgContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;

  img {
    width: 50%;
  }
  & > div {
    flex: 1;
  }
`;

export const MainContactTextContainer = styled.div`
  display: flex;
  text-align: left;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-left: 15px;
  padding-bottom: 15px;
`;
export const MainContactTitleContainer = styled.div`
  font-size: clamp(1.5em, 2.9vw, 3em);
  display: flex;
  width: 100%;
  color: white;
  justify-content: left;
  align-items: center;
  margin-left: 16px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;
