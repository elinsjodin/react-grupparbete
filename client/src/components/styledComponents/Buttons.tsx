import styled from "styled-components";

// Button for Form

export const FormButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 5px;
`;

// Buttons for the Main Page


export const MainBookingButton = styled.button`
  margin-top: 20px;
  width: 140px;
  text-decoration: none;
  font-size: 1em;
  padding: 10px 20px;
  border: 1px solid #fff;
  background: #fff;
  letter-spacing: 1px;
  display: inline-block;




  
`
export const MainContactButton = styled.button`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 50%;
  background-color: #ffffff;
  color: black;
  border: none;
  align-items: center;
  justify-content: center;
  margin-left: 145px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;
