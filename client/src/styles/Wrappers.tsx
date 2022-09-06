import styled from "styled-components";

// wrappers => Containers => Text

//wrapper for navbar
export const NavWrapper = styled.div`
  display: flex;
`;

//wrapper for hero section of booking page
export const BookingHeroWrapper = styled.div`
  display: flex;
`;

//wrapper for booking form and input
export const AddBookingWrapper = styled.div`
  display: flex;
`;

//wrappers for Main Page

export const MainPageWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0f0f0f;
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
  background-color: #0f0f0f;
`;

export const MainContactWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0f0f0f;

  @media (max-width: 768px) {
    flex-direction: column;
    line-height: 1.3;
    flex-shrink: 3;
    
  }
`;

