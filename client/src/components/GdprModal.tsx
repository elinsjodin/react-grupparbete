import {
  ModalBody,
  ModalButton,
  ModalButtonContainer,
  ModalContainer,
  ModalHeader,
} from "./styledComponents/Modal";

//interface for props
interface IProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setGdprChecked: (gdprChecked: boolean) => void;
}

export const GdprModal = (props: IProps) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <>
      <ModalContainer>
        <ModalHeader>GDPR</ModalHeader>
        <ModalBody>
          This Regulation lays down rules relating to the protection of natural
          persons with regard to the processing of personal data and rules
          relating to the free movement of personal data. This Regulation
          protects fundamental rights and freedoms of natural persons and in
          particular their right to the protection of personal data. The free
          movement of personal data within the Union shall be neither restricted
          nor prohibited for reasons connected with the protection of natural
          persons with regard to the processing of personal data.
        </ModalBody>
        <ModalButtonContainer>
          <ModalButton
            onClick={() => {
              props.setShowModal(false);
              props.setGdprChecked(true);
            }}
          >
            Only Cookies
          </ModalButton>
          <ModalButton
            onClick={() => {
              props.setShowModal(false);
              props.setGdprChecked(true);
            }}
          >
            Accept
          </ModalButton>
        </ModalButtonContainer>
      </ModalContainer>
    </>
  );
};
