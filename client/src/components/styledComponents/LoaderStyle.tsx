import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  //blur background
  backdrop-filter: blur(1.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const LoaderStyle = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  color: black;
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

export const SpinnerOne = styled.div`
  animation: ${keyframes`
  //make it disappear every 1.5 seconds
        0% {
                opacity: 1;
                //make it bounce
                transform: translateY(0px);

        }
        50% {
                opacity: 0;
                transform: translateY(-20px);
        }
        100% {
                opacity: 1;
                transform: translateY(0px);
        }
`} 1.5s infinite;
  width: 30px;
  height: 30px;
  background-color: #58bb5d;
  border-radius: 50%;
  //add a drop shadow
  box-shadow: 0px 0px 5px 5px rgba(57, 183, 76, 0.203);
`;

//create spinner based on spinner one
export const SpinnerTwo = styled(SpinnerOne)`
  animation-delay: 0.5s;
`;

export const SpinnerThree = styled(SpinnerOne)`
  animation-delay: 1s;
`;
