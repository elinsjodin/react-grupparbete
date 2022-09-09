import styled from "styled-components";

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  background-color: #0f0f0f;
  padding-bottom: 60px;
  padding-top: 50px;
  color: white;
  h1 {
    font-size: 1.5rem;
    //media query
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
  button {
    margin-top: 30px;
    height: 40px;
    width: 100px;
    background-color: #ffffff;
    color: black;
    border: none;
    border-radius: 5px;
  }
`;
