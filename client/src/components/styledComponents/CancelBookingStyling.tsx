import styled from "styled-components";

export const CancelBookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
  h1 {
    color: #fff;
    font-size: 1.5rem;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    a {
      color: #fff;
      text-decoration: underline;
      font-size: 1.2rem;
      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
`;
