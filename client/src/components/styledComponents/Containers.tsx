import styled from "styled-components";

// wrappers => Containers => Text

//NAVBAR

//container for navbar
export const NavLogo = styled.div`
  display: flex;
  height: 150px;
  width: 50%;
  padding-left: 15px;
  align-items: center;
  color: #ffffff;
`;

//container for navbar
export const NavLinksContainer = styled.div`
  display: flex;
  height: 150px;
  width: 50%;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding-right: 15px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
  button {
    color: #ffffff;
    background-color: #0f0f0f;
    border: none;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

//BOOKING

//container for hero title of booking page
export const BookingHeroTitleContainer = styled.div`
  display: flex;
  height: 375px;
  width: 50%;
  align-items: center;
  h1 {
    position: relative;
    bottom: 90px;
    color: #ffffff;
    padding-left: 15px;
  }
`;
//container for hero content of booking page
export const BookingHeroContentContainer = styled.div`
  display: flex;
  height: 375px;
  width: 50%;
  align-items: center;
  text-align: right;
  div {
    p {
      position: relative;
      top: 50px;
      color: #ffffff;
      padding-right: 15px;
    }
  }
`;

//container for booking form and input
export const AddBookingMonthContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

//container for booking form and input
export const AddBookingCalanderContainer = styled.div`
  display: flex;
  height: 170px;
  width: 100%;
  color: #ffffff;
  padding-left: 15px;
`;
//container for booking form and input
export const AddBookingChooseTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 170px;
  width: 100%;
  color: #ffffff;
`;
export const AddBookingChooseTimeHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100vw;
  color: #ffffff;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
  }
  div {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      gap: 40px;
      justify-content: center;
      align-items: center;

      button {
        height: 30px;
      }
    }
  }
`;

export const AddBookingChooseAmountContainer = styled.div`
  display: flex;
  height: 170px;
  width: 100%;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    display: flex;
  }
  div {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      gap: 40px;
      justify-content: center;
      align-items: center;

      button {
        height: 30px;
      }
    }
  }
`;

//container for booking form and input
export const AddBookingFormContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  color: #ffffff;
`;

export const AddBookingFormInputFieldsContainer = styled.div`
  display: flex;
  height: 300px;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  p {
    display: flex;
    color: #ffffff;
  }
`;

export const AddBookingFormButtonFieldsContainer = styled.div`
  display: flex;
  height: 300px;
  width: 50%;
  justify-content: right;
  align-items: center;
  padding-right: 15px;
`;
