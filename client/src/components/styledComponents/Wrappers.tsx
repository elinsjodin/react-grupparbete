import styled from "styled-components";

// wrappers => Containers => Text

//wrapper for hero section of booking page
export const BookingHeroWrapper = styled.div`
  display: flex;
  height: 375px;
  width: 100vw;
  background-color: #0f0f0f;
  box-sizing: border-box;
`;

//wrapper for booking form and input
export const AddBookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  width: 100vw;
  height: 100%;
`;

//wrappers for Main Page

// wrappers => Containers => Text

//wrapper for navbar
export const NavWrapper = styled.div`
  display: flex;
  height: 150px;
  width: 100vw;
  background-color: #0f0f0f;
`;

//wrapper for Main Page

export const MainPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc( 90vh );
  background-color: #0f0f0f; 
  @media (max-width: 768px) {
  
    height: calc( 30vh );
  }
`;



export const MainMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0f0f0f;

  @media (max-width: 768px) {
    flex-direction: column;
    line-height: 1.3;
    flex-shrink: 3;
  }
`;

export const MainBookingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc( 90vh );
  background-color: #0f0f0f; 
  @media (max-width: 768px) {
  
    height: calc( 60vh );
  }
`;


export const MainContactWrapper = styled.div`
  padding-top: 200px;
  display: flex;
  width: 100%;
  height: calc( 90vh );
  background-color: #0f0f0f; 
  @media (max-width: 768px) {
  
    height: calc( 30vh );
  }
`;


// wrappers for Contact Page

export const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0f0f0f;
  padding-bottom: 60px;
  padding-top: 50px;
`;

export const FindUsWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0f0f0f;
  padding-bottom: 60px;
  padding-top: 50px;
`;

export const FollowUsWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0f0f0f;
  padding-bottom: 60px;
  padding-top: 50px;
`;

export const AdminBookingWrapper = styled.div`
  display: flex;
  width: 100vw;
  background-color: #0f0f0f;
  padding-bottom: 60px;
`;
