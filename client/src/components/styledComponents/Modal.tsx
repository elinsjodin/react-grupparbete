import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  background-color: #ffffff;
  color: black;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const ModalHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  border-radius: 5px;
  font-size: 12pt;
`;

export const ModalBody = styled.div`
  height: 300px;
  width: 100%;
  background-color: #ffffff;
  font-size: 10pt;
  text-align: center;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ModalButton = styled.button`
  height: 50px;
  width: 100px;
  background-color: #e3e3e3;
  border: none;
  text-decoration: none;
  border-radius: 5px;
`;
