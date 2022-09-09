import styled from "styled-components";

// wrappers => Containers => Text

//NAVBAR

//container for navbar

//BOOKING

//container for hero title of booking page
export const BookingHeroTitleContainer = styled.div`
  display: flex;
  height: 375px;
  width: 50%;
  align-items: center;
  /* background-color: #0f0f0f; */
  h1 {
    position: relative;
    bottom: 90px;
    color: #ffffff;
    padding-left: 15px;
    @media (min-width: 768px) {
      left: 100px;
    }
  }
`;
//container for hero content of booking page
export const BookingHeroContentContainer = styled.div`
  display: flex;
  height: 375px;
  width: 50%;
  align-items: center;
  text-align: right;
  color: #ffffff;

  p {
    position: relative;
    top: 50px;
    right: 20px;
    @media (min-width: 768px) {
      right: 100px;
    }
  }
  /* @media (max-width: 768px) {
  } */
`;

//container for booking form and input
export const AddBookingMonthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100vw;
  /* background-color: #0f0f0f; */
  color: #ffffff;
`;

//container for booking form and input
export const AddBookingCalanderContainer = styled.div`
  display: flex;
  height: 180px;
  width: 100vw;
  color: #ffffff;
  justify-content: center;

  div {
    button {
      padding: 3px;
      color: white;
      background-color: #0f0f0f;
      text-decoration: none;
      border: none;
      cursor: pointer;
      //on hover, change color of button
      &:hover {
        color: #0f0f0f;
        background-color: #ffffff;
      }
    }
  }
`;
//container for booking form and input
export const AddBookingChooseTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 170px;
  width: 100vw;
  color: #ffffff;
  /* background-color: #0f0f0f; */
`;
export const AddBookingChooseTimeHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
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
    width: 100vw;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      gap: 40px;
      justify-content: center;
      align-items: center;

      button {
        border-radius: 5px;
        text-decoration: none;
        border: none;
        height: 30px;
        //on click, change color of button
        //on hover, change color of button
        &:hover {
          color: #0f0f0f;
          background-color: #ffffff;
        }
      }
    }
  }
`;

export const AddBookingChooseAmountContainer = styled.div`
  display: flex;
  height: 200px;
  width: 100vw;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
  h1 {
    display: flex;
  }
  div {
    display: flex;
    height: 50px;
    width: 100vw;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      gap: 30px;
      justify-content: center;
      align-items: center;

      button {
        border-radius: 5px;
        text-decoration: none;
        border: none;
        height: 30px;
        width: 30px;
        &:active {
          color: #0f0f0f;
          background-color: #ffffff;
        }
      }
    }
  }
`;

//container for booking form and input
export const AddBookingFormContainer = styled.div`
  display: flex;
  height: 350px;
  margin-left: 20px;
  width: 90%;
  color: #ffffff;
  background-color: #0f0f0f;
`;

export const AddBookingFormInputFieldsContainer = styled.div`
  display: flex;
  height: 300px;
  width: 50%;
  flex-direction: column;
  justify-content: center;
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
  background-color: #0f0f0f;
  gap: 10px;
`;

// wrappers => Containers => Text

//NAVBAR

//container for navbar
export const NavLogo = styled.div`
  display: flex;
  height: 150px;
  width: 50%;
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

//container Main Page - Hero
export const MainHeroContentContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: left;
  flex-direction: column;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-left: 0.8em;
    padding-bottom: 2px;
  }
`;

export const MainHeroImgContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 0;
  padding-bottom: 10px;
  img {
    width: 100%;
  }
`;

export const MainHeroTextContainer = styled.div`
  display: flex;
  text-align: right;
  color: white;
  font-size: clamp(0.6em, 1.9vw, 2.2em);
  padding-left: 2em;
  font-weight: 7;
  line-height: 1.2;

  @media (max-width: 768px) {
    flex-grow: 5;
    justify-content: left;
    padding-left: 0em;
    text-align: left;
    line-height: 1.3;
  }
`;
export const MainHeroTitleContainer = styled.div`
  display: flex;
  flex-shrink: 100;
  font-size: clamp(2em, 5vw, 8em);
  font-weight: 300;
  width: 100%;
  color: white;
  justify-content: right;
  align-items: center;
  text-align: right;
  padding-right: 0.8em;
  padding-left: 0.8em;
  padding-bottom: 1.5em;
  line-height: 0.9;
  letter-spacing: 8px;

  span {
    letter-spacing: 5px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    line-height: 1.3;
  }
`;

//container Main Page - Menu

export const MenuContentContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: right;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const MenuTitleContainer = styled.div`
  display: flex;
  flex-shrink: 100;
  font-size: clamp(2em, 5vw, 8em);
  font-weight: 300;
  width: 100%;
  color: white;
  justify-content: center;
  padding-top: 100px;
  align-items: left;
  text-align: center;
  padding-left: 0.8em;
  padding-bottom: 15px;
  line-height: 0.9;
  letter-spacing: 8px;

  span {
    letter-spacing: 5px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    justify-content: right;
    padding-left: 0px;
  }
`;

export const MenuImageContainer = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  margin: 0;
  padding-bottom: 10px;
  img {
    width: 100%;

    @media (max-width: 768px) {
      width: 50%;

      padding-right: 15px;
      justify-content: center;
    }
  }
`;
export const MenuTextContainer = styled.div`
  display: flex;
  text-align: left;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-right: 2em;
  font-weight: 7;
  line-height: 1.2;

  @media (max-width: 768px) {
    justify-content: left;

    text-align: left;
    line-height: 1.3;
  }
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
  text-align: right;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-right: 2em;
  font-weight: 7;
  line-height: 1.2;

  @media (max-width: 768px) {
    justify-content: left;

    text-align: left;
    line-height: 1.3;
  }
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
  align-items: right;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const MainContactTitleContainer = styled.div`
  display: flex;
  flex-shrink: 100;
  font-size: clamp(2em, 5vw, 8em);
  font-weight: 300;
  width: 100%;
  color: white;
  justify-content: center;
  padding-top: 100px;
  align-items: left;
  text-align: center;
  padding-left: 0.8em;
  padding-bottom: 15px;
  line-height: 0.9;
  letter-spacing: 8px;

  span {
    letter-spacing: 5px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    justify-content: right;
    padding-left: 0px;
  }
`;

export const MainContactImgContainer = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  margin: 0;
  padding-bottom: 10px;
  img {
    width: 100%;

    @media (max-width: 768px) {
      width: 50%;

      padding-right: 15px;
      justify-content: center;
    }
  }
`;
export const MainContactTextContainer = styled.div`
  display: flex;
  text-align: left;
  color: white;
  font-size: clamp(1em, 1.9vw, 2.2em);
  margin-right: 2em;
  font-weight: 7;
  line-height: 1.2;

  @media (max-width: 768px) {
    justify-content: left;

    text-align: left;
    line-height: 1.3;
  }
`;

// CONTACT PAGE

export const ContacTitleContainer = styled.div`
  font-size: clamp(35px, 7vw, 40px);
  display: flex;
  width: 50%;
  color: #ffffff;
  font-weight: lighter;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ContactTextContainer = styled.div`
  font-size: clamp(12px, 3.6vw, 28px);
  display: flex;
  color: #ffffff;
  width: 50%;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  line-height: 50px;

  p {
    text-align: left;
    font-weight: bold;
  }

  div {
    font-style: italic;
    text-align: left;
  }
  @media (max-width: 768px) {
    line-height: 24px;
  }
`;

export const FindUsTextContainer = styled.div`
  font-size: clamp(12px, 3.6vw, 28px);
  display: flex;
  color: #ffffff;
  width: 50%;
  justify-content: right;
  text-align: right;
  flex-direction: column;

  p {
    text-align: right;
    font-weight: bold;
  }

  div {
    padding-left: 50px;
    display: flex;
    justify-content: right;
  }
`;

export const FindUsTitleContainer = styled.div`
  font-size: clamp(35px, 7vw, 40px);
  display: flex;
  width: 50%;
  max-width: 350px;
  color: #ffffff;
  font-weight: lighter;
  justify-content: right;
  align-items: flex-end;
  padding-right: 25px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const FollowTitleContainer = styled.div`
  font-size: clamp(35px, 7vw, 40px);
  display: flex;
  width: 50%;
  color: #ffffff;
  font-weight: lighter;
  align-items: flex-end;
  justify-content: center;
  padding-left: 10px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const AdminBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 100%;
  background-color: #0f0f0f;
  color: white;
  padding: 20px;
  p {
    font-size: 1.5em;
    color: white;
    text-decoration: underline;
  }
`;






