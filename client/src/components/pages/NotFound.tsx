import { ErrorWrapper } from "../styledComponents/Wrappers"

export const NotFound = () => {
  return (
    <>
      <ErrorWrapper>
        <h1>Oops!</h1>
        <h2>You are not supposed to be here</h2>
        <p>Please navigate back using the header menu</p>
      </ErrorWrapper>
    </>
  );
};
