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
  color: #fff;
  width: 100%;
  max-width: 140px;
  min-width: 139px;
  text-decoration: none;
  font-size: 1em;
  padding:15px 15px;
  border: 1px solid #fff;
  background-color: #0f0f0f;
  letter-spacing: 1px;
  
  :hover > div{ 
    cursor: pointer;   
}
`

export const MainContactButton = styled(MainBookingButton)`
`