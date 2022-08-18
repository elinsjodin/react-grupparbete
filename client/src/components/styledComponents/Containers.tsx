import styled from "styled-components";

// wrappers => Containers => Text

//NAVBAR

//container for navbar
export const NavLogo = styled.div`
  display: flex;
  height: 150px;
  width: 50%;
  background-color: #555555;
`;

//container for navbar
export const NavLinksContainer = styled.div`
  display: flex;
  height: 150px;
  width: 50%;
  background-color: #931e1e;

  a {
    color: #ffffff;
    text-decoration: none;
  }
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
